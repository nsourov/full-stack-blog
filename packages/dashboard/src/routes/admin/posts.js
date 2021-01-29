import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Post = lazy(() => import('../../container/post/Posts'));
const PostDetails = lazy(() => import('../../container/post/PostDetails'));
const PostCreate = lazy(() => import('../../container/post/PostCreate'));

const ProjectRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/view`} component={Post} />
      <Route path={`${path}/create`} component={PostCreate} />
      <Route path={`${path}/:slug`} component={PostDetails} />
    </Switch>
  );
};

export default ProjectRoutes;
