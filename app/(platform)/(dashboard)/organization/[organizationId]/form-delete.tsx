'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { useFormStatus } from 'react-dom';

const FormDelete = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      size={'sm'}
      disabled={pending}
      variant={'destructive'}
    >
      Delete
    </Button>
  );
};

export default FormDelete;
