import React, { lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Fallback from '../../components/fallback';
import Layout from '../../container/layout';

const Profile = lazy(() => import('./Profile/Profile'));
const PostList = lazy(() => import('./PostList'));
const CreatePost = lazy(() => import('./CreatePost'));
const UpdatePost = lazy(() => import('./UpdatePost'));
const NotFound = lazy(() => import('../../container/pages/404'));

const Admin = () => {
  const { path } = useRouteMatch();
  return (
    <Layout>
      <Suspense fallback={<Fallback />}>
        <Switch>
          <Route exact path={`${path}`} component={Profile} />
          <Route exact path={`${path}/post/list`} component={PostList} />
          <Route exact path={`${path}/post/create`} component={CreatePost} />
          <Route exact path={`${path}/post/update/:slug`} component={UpdatePost} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default Admin;
