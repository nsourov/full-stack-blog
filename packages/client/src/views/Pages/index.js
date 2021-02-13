import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container, Row } from 'reactstrap';

import withTitle from '../../components/TitleComponent';
import Sidebar from '../Sidebar';

import Blog from '../Blog';
import Post from '../Post';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

const Pages = () => {
  const check = useLocation();

  return (
    <Container>
      <Row>
        <div className='col-lg-8'>
            <Switch>
              <Route
                exact
                path='/'
                render={(props) =>
                  withTitle({
                    component: Blog,
                    title: 'Bruch Blog',
                    ...props,
                  })
                }
              />

              <Route
                exact
                path='/post/:slug'
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
                path='/signin'
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
                path='/signup'
                render={(props) =>
                  withTitle({
                    component: SignUp,
                    title: 'sign-up',
                    ...props,
                  })
                }
              />
            </Switch>
        </div>
        {check.pathname === '/signin' || check.pathname === '/signup' ? null : (
          <Sidebar />
        )}
      </Row>
    </Container>
  );
};

export default Pages;
