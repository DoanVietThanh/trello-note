import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';
import { ReactNode } from 'react';
import { Toaster, toast } from 'sonner';

const PlatformLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
