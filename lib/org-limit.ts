import { auth } from '@clerk/nextjs';
import prisma from './db';
import { MAX_PREE_BOARDS } from '@/constants/boards';

// Function: Get Available Count Limit
export const getAvailableCount = async () => {
  const { orgId } = auth();

  if (!orgId) {
    return 0;
  }
  const orgLimit = await prisma.orgLimit.findUnique({
    where: {
      orgId,
    },
  });
  console.log('orgLimit: ', orgLimit);

  if (!orgLimit) {
    return 0;
  }
  return orgLimit.count;
};

// Function: Check Available Count Limit
export const hasAvailableCount = async () => {
  const { orgId } = auth();
  if (!orgId) {
    throw new Error('Unauthorized');
  }
  const orgLimit = await prisma.orgLimit.findUnique({
    where: {
      orgId,
    },
  });
  if (!orgLimit || orgLimit.count < MAX_PREE_BOARDS) {
    return true;
  } else {
    return false;
  }
};

// Function: Increase Available Count Limit
export const increamentAvailableCount = async () => {
  const { orgId } = auth();
  if (!orgId) {
    throw new Error('Unauthorized');
  }
  const orgLimit = await prisma.orgLimit.findUnique({
    where: { orgId },
  });

  if (orgLimit) {
    await prisma.orgLimit.update({
      where: { orgId },
      data: {
        count: orgLimit.count + 1,
      },
    });
  } else {
    // The first time create board -> OrgLimit doesn't exist
    await prisma.orgLimit.create({
      data: { orgId, count: 1 },
    });
  }
};

// Function: Decrease Available Count Limit
export const decreaseAvailableCount = async () => {
  const { orgId } = auth();

  if (!orgId) {
    throw new Error('Unauthorized');
  }

  const orgLimit = await prisma.orgLimit.findUnique({
    where: { orgId },
  });

  if (orgLimit) {
    await prisma.orgLimit.update({
      where: { orgId },
      data: { count: orgLimit.count > 0 ? orgLimit.count - 1 : 0 },
    });
  } else {
    // The first time create board -> OrgLimit doesn't exist
    await prisma.orgLimit.create({
      data: { orgId, count: 1 },
    });
  }
};
