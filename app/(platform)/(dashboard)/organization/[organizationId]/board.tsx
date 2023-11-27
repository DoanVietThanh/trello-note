import { deleteBoard } from '@/actions/delete-board/deleteBoard';
import { Button } from '@/components/ui/button';
import FormDelete from './form-delete';

interface iBoard {
  id: string;
  title: string;
}

const Board = ({ id, title }: iBoard) => {
  const deleteBoardById = deleteBoard.bind(null, id);
  //   const deleteBoardById = () => deleteBoard(id);
  return (
    <form action={deleteBoardById} className='flex items-center gap-x-2'>
      <p className=''>Board Title: {title}</p>
      <FormDelete />
    </form>
  );
};

export default Board;
