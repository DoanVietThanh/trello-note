import { ReactNode } from 'react';

export const ListWrapper = ({ children }: { children: ReactNode }) => {
  return <li className='shrink-0 h-full w-[272px] select-none'>{children}</li>;
};
