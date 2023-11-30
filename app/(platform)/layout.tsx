import ModalProvider from '@/components/providers/modal-provider';
import { QueryProvider } from '@/components/providers/query-provider';
import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';
import { ReactNode } from 'react';
import { Toaster, toast } from 'sonner';

const PlatformLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
