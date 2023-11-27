'use client';
import React from 'react';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '../ui/button';
import { FormInput } from './form-input';
import { FormSubmit } from './form-submit';
import { X } from 'lucide-react';
import { useAction } from '@/hooks/useAction';
import { createBoard } from '@/actions/create-board';
import { toast } from 'sonner';

interface iFormPopover {
  children: React.ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}

const FormPopover = ({
  children,
  side = 'bottom',
  align,
  sideOffset = 0,
}: iFormPopover) => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log({ data });
      toast.success('Board created !');
    },
    onError: (error) => {
      console.log({ error });
      toast.error('Board created fail !');
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;
    execute({ title });
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>{children}</PopoverTrigger>
        <PopoverContent
          align={align}
          className='w-80 pt-3'
          side={side}
          sideOffset={sideOffset}
        >
          <div className='text-sm font-medium text-center text-neutral-600 pb-4'>
            Create board
          </div>
          <PopoverClose asChild>
            <Button
              className='h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600'
              variant='ghost'
            >
              <X className='h-4 w-4' />
            </Button>
          </PopoverClose>
          <form action={onSubmit} className='space-y-4'>
            <div className='space-y-4'>
              <FormInput
                id='title'
                label='Board title'
                type='text'
                errors={fieldErrors}
              />
            </div>
            <FormSubmit className='w-full'>Create</FormSubmit>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FormPopover;
