import React from 'react';
import { Link } from 'react-router-dom';

const PostMeta = ({ category }) => {
  return (
    <div className='post-meta d-flex justify-content-between'>
      <div className='category'>
        <Link to='#'>{category}</Link>
      </div>
    </div>
  );
};

export default PostMeta;
