import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../../assets/css/style.css';
import '../../assets/css/components/style.default.css';

import Fallback from '../../components/Fallback';
import NotFound from '../../components/404';
import withTitle from '../../components/TitleComponent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Pages
const Pages = lazy(() => import('../Pages'));

const App = () => {
  document.body.setAttribute('data-theme', 'dark');
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
