'use client';
import { ListWithCards } from '@/types';
import { List } from '@prisma/client';
import React from 'react';
import ListForm from './ListForm';

interface iListContainer {
  boardId: string;
  data: ListWithCards[];
}

const ListContainer = ({ boardId, data }: iListContainer) => {
  return (
    <ol>
      <div>
        <ListForm />
      </div>
    </ol>
  );
};

export default ListContainer;
