import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'src/assets/css/style.css';
import 'src/assets/css/components/style.default.css';

import Fallback from 'src/components/Fallback';
import NotFound from 'src/components/404';
import withTitle from 'src/components/TitleComponent';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// Pages
const Docs = lazy(() => import('../Documentation'));
const Pages = lazy(() => import('../Pages'));
const ThemeDocPage = lazy(() => import('../Documentation/ThemeDocPage'));

const App = () => {
  document.body.setAttribute('data-theme', 'dark');
  return (
    <Router>
      <Header />
      <Suspense fallback={<Fallback />}>
        <Switch>
          {/* Page routes */}
          <Route
            path="/"
            render={(props) =>
              withTitle({
                component: Pages,
                title: 'Welcome',
                ...props,
              })
            }
          />

          {/* Doc Page */}
          <Route
            exact
            path="/docs"
            render={(props) =>
              withTitle({
                component: Docs,
                title: 'Docs',
                ...props,
              })
            }
          />

          {/** Theme Page */}
          <Route
            exact
            path="/docs/"
            render={(props) =>
              withTitle({
                component: ThemeDocPage,
                title: 'Theme Page',
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
