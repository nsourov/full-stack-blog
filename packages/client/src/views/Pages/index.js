import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import withTitle from '../../components/TitleComponent';
import Sidebar from '../Sidebar';

import Blog from '../Blog';
import Post from '../Post';
import SignUp from '../SignUp';
import Search from '../Search';

const Pages = () => {
  const check = useLocation();

  return (
    <>
      <div className='col-lg-8'>
        <Switch>
          <Route
            exact
            path='/blog'
            render={(props) =>
              withTitle({
                component: Blog,
                title: 'Bruce Blog',
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
                title: 'post',
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
                ...props,
              })
            }
          />
        </Switch>
      </div>

      <Sidebar />
    </>
  );
};

export default Pages;
