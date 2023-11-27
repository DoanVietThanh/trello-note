import { Input } from '@/components/ui/input';
import React from 'react';
import { useFormStatus } from 'react-dom';
interface iFormInput {
  errors?: {
    title?: string[];
  };
}
const FormInput = ({ errors }: iFormInput) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <Input
        type='text'
        id='title'
        name='title'
        required
        disabled={pending}
        placeholder='Enter a board title'
      />
      {errors?.title && (
        <div>
          {errors?.title.map((error: string) => (
            <p key={error} className='text-rose-500'>
              {error}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormInput;
