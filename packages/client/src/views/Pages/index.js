import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container, Row } from 'reactstrap';

import Fallback from '../../components/Fallback';
import withTitle from '../../components/TitleComponent';
import Sidebar from '../Sidebar';

const Blog = lazy(() => import('../Blog'));
const Post = lazy(() => import('../Post'));
const SignIn = lazy(() => import('../SignIn'));
const SignUp = lazy(() => import('../SignUp'));

const Pages = () => {
  const check = useLocation();

  return (
    <Container>
      <Row>
        <Suspense fallback={<Fallback />}>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) =>
                withTitle({
                  component: Blog,
                  title: 'blog',
                  ...props,
                })
              }
            />

            <Route
              exact
              path="/post/:slug"
              render={(props) =>
                withTitle({
                  component: Post,
                  title: 'post',
                  ...props,
                })
              }
            />
            <Route
              exact
              path="/signin"
              render={(props) =>
                withTitle({
                  component: SignIn,
                  title: 'sign-in',
                  ...props,
                })
              }
            />
            <Route
              exact
              path="/signup"
              render={(props) =>
                withTitle({
                  component: SignUp,
                  title: 'sign-up',
                  ...props,
                })
              }
            />
          </Switch>
        </Suspense>
        {check.pathname === '/signin' || check.pathname === '/signup' ? null : (
          <Sidebar />
        )}
      </Row>
    </Container>
  );
};

export default Pages;
