import React from 'react';

const Skeleton = ({
  width = '50%',
  height = 16,
  bottom = 14,
  left = 0,
  right = 0,
  circle = false,
}) => {
  return (
    <div
      className='skeleton '
      style={{
        width,
        height,
        marginLeft: left,
        marginRight: right,
        marginBottom: bottom,
        ...(circle && { borderRadius: '100%', height: width }),
      }}
    />
  );
};

export default Skeleton;
