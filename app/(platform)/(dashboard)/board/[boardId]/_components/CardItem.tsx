'use client';
import { useCardModal } from '@/hooks/useCardModal';
import { Draggable } from '@hello-pangea/dnd';
import { Card } from '@prisma/client';
import React from 'react';

interface iCardItem {
  data: Card;
  index: number;
}

const CardItem = ({ data, index }: iCardItem) => {
  const cardModal = useCardModal();

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          role='button'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => cardModal.onOpen(data.id)}
          className='truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm'
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;
