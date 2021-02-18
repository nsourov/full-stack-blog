import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { hot } from 'react-hot-loader/root';
// import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
// import store from './redux/store';
import Admin from './routes/admin';
// import Auth from './routes/auth';
import './static/css/style.css';
import config from './config/config';
// import ProtectedRoute from './components/utilities/protectedRoute';
// import {
//   UserRoute,
//   UserPrivateRoute,
// } from './components/privateRoute/privateRoute';

import App from './views/App';
const { theme } = config;

const ProviderConfig = () => {
  // const { isLoggedIn, topMenu, darkMode } = useSelector((state) => {
  //   return {
  //     darkMode: state.ChangeLayoutMode.data,
  //     topMenu: state.ChangeLayoutMode.topMenu,
  //     isLoggedIn: state.auth.login,
  //   };
  // });

  // const [path, setPath] = useState(window.location.pathname);

  // console.log('topMenu',darkMode)
  // useEffect(() => {
  //   let unmounted = false;
  //   if (!unmounted) {
  //     setPath(window.location.pathname);
  //   }
  //   // eslint-disable-next-line no-return-assign
  //   return () => (unmounted = true);
  // }, [setPath]);

  return (
    <ConfigProvider direction='ltr'>
      <ThemeProvider theme={{ ...theme, topMenu: true, darkMode: true }}>
        <App />
        {/* <Router>
        <UserRoute exact path="/" component={Auth} />
        <UserPrivateRoute path="/admin" component={Admin} />
          {/* {!isLoggedIn ? (

          ) : (

          )} */}
        {/* {isLoggedIn &&
            (path === process.env.PUBLIC_URL ||
              path === `${process.env.PUBLIC_URL}/`) && (
              <Redirect to="/admin" />
            )}
        </Router>
        */}
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default ProviderConfig;
