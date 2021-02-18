import React from 'react';
import { Spin } from 'antd';

const Fallback = () => {
  return (
    <div className='spin'>
      <Spin />
    </div>
  );
};

export default Fallback;
