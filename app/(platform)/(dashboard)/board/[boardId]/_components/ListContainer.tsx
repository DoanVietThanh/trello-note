'use client';
import { ListWithCards } from '@/types';
import { List } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import ListForm from './ListForm';
import ListItem from './ListItem';

interface iListContainer {
  boardId: string;
  data: ListWithCards[];
}

const ListContainer = ({ boardId, data }: iListContainer) => {
  const [orderedData, setOrderedData] = useState(data);
  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  return (
    <ol className='flex gap-x-3 h-full'>
      {orderedData.map((list, index) => (
        <ListItem key={list.id} index={index} data={list} />
      ))}
      <ListForm />
    </ol>
  );
};

export default ListContainer;
