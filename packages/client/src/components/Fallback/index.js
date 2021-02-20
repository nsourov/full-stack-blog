import React from 'react';

import logo from '../../assets/img/logo.png';

const Fallback = () => {
  return (
    <div className='fallback-loader'>
      <img src={logo} alt='preloader' />
    </div>
  );
};

export default Fallback;
