import React, { lazy, Suspense } from 'react';

const LazyTaskCard = lazy(() => import('./TaskCard'));

const TaskCard = props => (
  <Suspense fallback={null}>
    <LazyTaskCard {...props} />
  </Suspense>
);

export default TaskCard;
