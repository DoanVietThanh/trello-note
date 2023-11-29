'use server';

import prisma from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { DeleteList } from './scheme';
import { revalidatePath } from 'next/cache';
import { InputType, ReturnType } from './types';
import { createSafeAction } from '@/lib/create-safe-action';

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }
  const { id, boardId } = data;
  let list;
  try {
    list = await prisma.list.delete({
      where: {
        id,
        boardId,
        board: {
          orgId,
        },
      },
    });
  } catch (error) {
    return {
      error: 'Failed to delete',
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: list };
};

export const deleteList = createSafeAction(DeleteList, handler);
