import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { me } from '../../api/api';
import { setCurrentUser, logOutUser } from '../../state/ducks/authentication';
import Fallback from '../../components/fallback';
import AdminRoute from '../../components/adminRoute';

const Login = lazy(() => import('../Signin'));
const Admin = lazy(() => import('../Admin'));

const App = () => {
  const { isAuthenticated, data } = useSelector((store) => store.user);

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
        dispatch(logOutUser());
      }
    }

    if (localStorage.jwtToken) {
      checkAuth();
    }
  }, [dispatch]);

  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <Switch>
          <Route exact path='/' component={Login} />
          {/* <Route exact path='/admin' component={Login} /> */}
          <AdminRoute
            path='/admin'
            component={Admin}
            role={data?.role}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
