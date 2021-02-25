import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { message } from 'antd';

const AdminRoute = ({ component: AdminComponent, ...rest }) => {
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

        if (rest.role === 'visitor') {
          message.error('You do not have permission');
          return <Redirect to='/404' />;
        }

        return <Redirect to='/signin' />;
      }}
    />
  );
};

export default AdminRoute;
