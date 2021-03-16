import React, { Suspense, lazy, useEffect, useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Row } from 'reactstrap';
import ReactNotification from 'react-notifications-component';

import '../../assets/css/style.css';

import Fallback from '../../components/Fallback';
import NotFound from '../../components/404';
import withTitle from '../../components/TitleComponent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { me, getAdmin } from '../../api';
import {
  setCurrentUser,
  logOutUser,
  setAdmin,
} from '../../state/ducks/authentication';
import 'react-notifications-component/dist/theme.css';

import Post from '../Post';
import Search from '../Search';

// Pages
const SignIn = lazy(() => import('../SignIn'));
const SignUp = lazy(() => import('../SignUp'));
const Blog = lazy(() => import('../Blog'));
const CategoryBlog = lazy(() => import('../CategoryBlog'));

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    async function checkAuth() {
      try {
        const adminRes = await getAdmin();
        if (adminRes.status === 200) {
          dispatch(setAdmin(adminRes.data.admin));
        }

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

    checkAuth();
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
                    title: 'Trollz',
                    sidebar: true,
                    ...props,
                  })
                }
              />
              <Route
                exact
                path='/category/:slug'
                render={(props) =>
                  withTitle({
                    component: CategoryBlog,
                    title: 'Trollz',
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
                    sidebar: true,
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
