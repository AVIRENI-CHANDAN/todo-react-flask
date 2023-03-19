import React, { lazy, Suspense } from 'react';

const LazyNewTask = lazy(() => import('./NewTask'));

const NewTask = props => (
  <Suspense fallback={null}>
    <LazyNewTask {...props} />
  </Suspense>
);

export default NewTask;
