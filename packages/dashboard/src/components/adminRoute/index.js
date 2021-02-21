import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../state/ducks/authentication';

const AdminRoute = ({ component: AdminComponent, ...rest }) => {
  const dispatch = useDispatch();
  return (
    <Route
      {...rest}
      render={(props) => {
        const hasAccess =
          rest.isAuthenticated &&
          (rest.role === 'admin' || rest.role === 'editor');
        if (hasAccess) {
          return <AdminComponent {...props} />;
        }
        // dispatch(logOutUser());
        return (
          <Redirect
            to={{
              pathname: '/',
              state: { message: 'You are not accessible to this route' },
            }}
          />
        );
      }}
    />
  );
};

export default AdminRoute;
