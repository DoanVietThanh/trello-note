import prisma from '@/lib/db';
import Board from './board';
import { Form } from './form';

const OrganizationIdPage = async () => {
  const board = await prisma.board.findMany();
  console.log('board: ', board);

  return (
    <div className='flex flex-col space-y-4'>
      <Form />
      <div className='space-y-2'>
        {board.map((item, index) => (
          <Board key={index} id={item.id} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
