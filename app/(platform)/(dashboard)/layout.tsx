import React, { ReactNode } from 'react';
import Navbar from './_components/Navbar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full'>
      <Navbar />
      <div className='h-full'>{children}</div>
    </div>
  );
};

export default DashboardLayout;
