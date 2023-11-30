'use client';

import { List } from '@prisma/client';
import { useEventListener } from 'usehooks-ts';
import React, { ElementRef, useRef, useState } from 'react';
import { FormInput } from '@/components/form/form-input';
import { useAction } from '@/hooks/useAction';
import { toast } from 'sonner';
import ListOptions from './ListOptions';
import { updateList } from '@/actions/update-list';

interface iListHeader {
  data: List;
  onAddCard: () => void;
}

const ListHeader = ({ data, onAddCard }: iListHeader) => {
  const [title, setTitle] = useState(data.title);
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<ElementRef<'form'>>(null);
  const inputRef = useRef<ElementRef<'input'>>(null);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disableEditing = () => setIsEditing(false);
  const onBlur = () => formRef.current?.requestSubmit();

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      formRef.current?.requestSubmit();
    }
  };
  useEventListener('keydown', onKeyDown);

  const { execute, fieldErrors } = useAction(updateList, {
    onSuccess: (data) => {
      toast.success(`Update "${data.title}" successfully`);
      setTitle(data.title);
      disableEditing();
    },
    onError: (error) => toast.error(error),
  });

  const onSubmit = (formData: FormData) => {
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const boardId = formData.get('boardId') as string;

    if (title === data.title) {
      return disableEditing();
    }

    execute({
      id,
      title,
      boardId,
    });
  };

  return (
    <div className='pt-2 px-2 text-sm font-semibold flex justify-between items-start- gap-x-2'>
      {isEditing ? (
        <form action={onSubmit} ref={formRef} className='flex-1 px-[2px]'>
          <input hidden id='id' name='id' value={data.id} />
          <input hidden id='boardId' name='boardId' value={data.boardId} />
          <FormInput
            id='title'
            ref={inputRef}
            onBlur={onBlur}
            errors={fieldErrors}
            defaultValue={title}
            placeholder='Enter list title..'
            className='text-sm px-[7px] py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition truncate bg-transparent focus:bg-white'
          />
          <button type='submit' hidden />
        </form>
      ) : (
        <div
          onClick={enableEditing}
          className='w-full text-sm px-2.5 py-1 h-7 font-medium border-transparent'
        >
          {title}
        </div>
      )}{' '}
      <ListOptions onAddCard={onAddCard} data={data} />
    </div>
  );
};

export default ListHeader;
