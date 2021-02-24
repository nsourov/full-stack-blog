import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Row } from 'reactstrap';
import ReactNotification from 'react-notifications-component';

import '../../assets/css/style.css';

import Fallback from '../../components/Fallback';
import NotFound from '../../components/404';
import withTitle from '../../components/TitleComponent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { me } from '../../api';
import { setCurrentUser, logOutUser } from '../../state/ducks/authentication';
import 'react-notifications-component/dist/theme.css';

import Post from '../Post';
import Search from '../Search';

// Pages
const SignIn = lazy(() => import('../SignIn'));
const SignUp = lazy(() => import('../SignUp'));
const Blog = lazy(() => import('../Blog'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkAuth() {
      try {
        if (!localStorage.jwtToken) {
          return;
        }
        const res = await me(localStorage.jwtToken);
        const { token } = res?.data;
        if (token) {
          dispatch(setCurrentUser({ token }));
          return;
        }

        dispatch(logOutUser());
      } catch (error) {
        console.log(error);
        dispatch(logOutUser());
      }
    }

    if (localStorage.jwtToken) {
      checkAuth();
    }
  }, [dispatch]);

  return (
    <Router>
      <ReactNotification />
      <Header />
      <Container className='main-wraper'>
        <Row>
          <Suspense fallback={<Fallback />}>
            <Switch>
              <Route
                exact
                path='/'
                render={(props) =>
                  withTitle({
                    component: Blog,
                    title: '4Trollz',
                    sidebar: true,
                    ...props,
                  })
                }
              />
              <Route
                exact
                path='/blog/post/:slug'
                render={(props) =>
                  withTitle({
                    component: Post,
                    title: 'Post',
                    sidebar: true,
                    ...props,
                  })
                }
              />
              <Route
                exact
                path='/blog/search'
                render={(props) =>
                  withTitle({
                    component: Search,
                    title: 'Blogs',
                    sidebar: false,
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
                    title: 'Sign In',
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
                    title: 'Sign Up',
                    ...props,
                  })
                }
              />

              {/* Default 404 */}
              <Route
                render={(props) =>
                  withTitle({
                    component: NotFound,
                    title: '404 Error',
                    ...props,
                  })
                }
              />
            </Switch>
          </Suspense>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
