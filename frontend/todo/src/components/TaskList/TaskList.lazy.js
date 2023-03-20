import React, { lazy, Suspense } from 'react';

const LazyTaskList = lazy(() => import('./TaskList'));

const TaskList = props => (
  <Suspense fallback={null}>
    <LazyTaskList {...props} />
  </Suspense>
);

export default TaskList;
