import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../../assets/css/style.css';
import '../../assets/css/components/style.default.css';

import Fallback from '../../components/Fallback';
import NotFound from '../../components/404';
import withTitle from '../../components/TitleComponent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { me } from '../../api';
import { setCurrentUser, logOutUser } from '../../state/ducks/authentication';

// Pages
const Pages = lazy(() => import('../Pages'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkAuth() {
      try {
        if (!localStorage.jwtToken) {
          return;
        }
        const res = await me(localStorage.jwtToken);
        const user = res?.data;
        if (user) {
          dispatch(setCurrentUser({ token: localStorage.jwtToken }));
          return;
        }

        dispatch(logOutUser());
      } catch (error) {
        console.log(error);
      }
    }

    if (localStorage.jwtToken) {
      checkAuth();
    }
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Suspense fallback={<Fallback />}>
        <Switch>
          {/* Page routes */}
          <Route
            path='/'
            render={(props) =>
              withTitle({
                component: Pages,
                title: 'Welcome',
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
      <Footer />
    </Router>
  );
};

export default App;
