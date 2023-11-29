import prisma from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';
import ListContainer from './_components/ListContainer';

interface iBoardIdPage {
  params: {
    boardId: string;
  };
}

const BoardIdPage = async ({ params }: iBoardIdPage) => {
  const { orgId } = auth();
  if (!orgId) {
    redirect('/select-org');
  }

  const lists = await prisma.list.findMany({
    where: {
      boardId: params.boardId,
      board: {
        orgId,
      },
    },
    include: {
      cards: {
        orderBy: {
          order: 'asc',
        },
      },
    },
    orderBy: {
      order: 'asc',
    },
  });

  return (
    <div className='p-4 h-full overflow-x-auto'>
      <ListContainer boardId={params.boardId} data={lists} />
    </div>
  );
};

export default BoardIdPage;
