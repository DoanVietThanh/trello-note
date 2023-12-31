import React from 'react';
import { startCase } from 'lodash';
import { auth } from '@clerk/nextjs';
import OrgControl from './_components/org-control';

export async function generateMetadata() {
  // Bắt buộc ghi đúng generateMetadata
  const { orgSlug } = auth();
  return {
    title: startCase(orgSlug || 'organization'),
  };
}

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full'>
      <OrgControl />
      {children}
    </div>
  );
};

export default OrganizationIdLayout;
