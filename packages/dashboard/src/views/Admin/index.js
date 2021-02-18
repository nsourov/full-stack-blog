import React, { lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Fallback from '../../components/fallback';
import Layout from '../../container/layout';

const Profile = lazy(() => import('./Profile'));
const NotFound = lazy(() => import('../../container/pages/404'));

const Admin = () => {
  const { path } = useRouteMatch();
  return (
    <Layout>
      <Suspense fallback={<Fallback />}>
        <Switch>
          <Route exact path={`${path}`} component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default Admin;
