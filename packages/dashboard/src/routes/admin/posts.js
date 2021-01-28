import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Post = lazy(() => import('../../container/post/Project'));
const PostDetails = lazy(() => import('../../container/post/PostDetails'));
const ProjectDetails = lazy(() =>
  import('../../container/post/ProjectDetails')
);
const ProjectCreate = lazy(() => import('../../container/post/ProjectCreate'));

const ProjectRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/projectDetails/:id`} component={ProjectDetails} />
      <Route path={`${path}/view`} component={Post} />
      <Route path={`${path}/create`} component={ProjectCreate} />
      <Route path={`${path}/postDetails/:slug`} component={PostDetails} />
    </Switch>
  );
};

export default ProjectRoutes;
