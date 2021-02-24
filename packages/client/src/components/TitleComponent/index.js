import React from 'react';
import Helmet from 'react-helmet';

import Sidebar from '../Sidebar';

const TitleComponent = ({ title }) => {
  return (
    <Helmet>
      <title>{title ? `${title}` : '4Trollz'}</title>
    </Helmet>
  );
};

const withTitle = ({ component: Component, title, sidebar, ...props }) => {
  return (
    <>
      <TitleComponent title={title} />
      {sidebar ? (
        <>
          <div className='col-lg-8'>
            <Component {...props} />
          </div>

          <Sidebar />
        </>
      ) : (
        <Component {...props} />
      )}
    </>
  );
};

export default withTitle;
