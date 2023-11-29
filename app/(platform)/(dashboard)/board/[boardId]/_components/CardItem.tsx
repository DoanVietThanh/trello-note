'use client';
import { Card } from '@prisma/client';
import React from 'react';

interface iCardItem {
  data: Card;
  index: number;
}

const CardItem = ({ data, index }: iCardItem) => {
  return (
    <div
      role='button'
      className='truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm'
    >
      {data.title}
    </div>
  );
};

export default CardItem;
