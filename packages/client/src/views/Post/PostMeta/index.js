import React from 'react';
import { Link } from 'react-router-dom';

const PostMeta = () => {
  return (
    <div className="post-meta d-flex justify-content-between">
      <div className="category">
        <Link to="#">Business</Link>
        <Link to="#">Financial</Link>
      </div>
    </div>
  );
};

export default PostMeta;
