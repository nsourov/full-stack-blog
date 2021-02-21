import React from 'react';
import Helmet from 'react-helmet';

const TitleComponent = ({ title }) => {
  return (
    <Helmet>
      <title>{title ? `${title}` : 'App name'}</title>
    </Helmet>
  );
};

const withTitle = ({ component: Component, title, ...props }) => {
  return (
    <>
      <TitleComponent title={title} />
      <Component {...props} />
    </>
  );
};

export default withTitle;
