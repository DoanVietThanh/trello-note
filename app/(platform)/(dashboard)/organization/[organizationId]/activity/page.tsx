import { Separator } from '@/components/ui/separator';
import React, { Suspense } from 'react';
import { ActivityList } from './_components/activityList';
import { Info } from '../_components/info';

const ActivityPage = () => {
  return (
    <div className='w-full '>
      <Info isPro={true} />
      <Separator className='my-2' />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default ActivityPage;
