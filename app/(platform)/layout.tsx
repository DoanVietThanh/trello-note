import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';
import { ReactNode } from 'react';

const PlatformLayout = ({ children }: { children: ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayout;
