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
          !rest.admin &&
          (rest.role === 'admin' || rest.role === 'editor');

        const admin =
          rest.isAuthenticated && rest.admin && rest.role === 'admin';

        if (hasAccess) {
          return <AdminComponent {...props} />;
        }
        if (admin) {
          return <AdminComponent {...props} />;
        }
        // dispatch(logOutUser());
        return <Redirect to='/signin' />;
      }}
    />
  );
};

export default AdminRoute;
