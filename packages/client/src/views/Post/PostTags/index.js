import React from 'react';
import { Link } from 'react-router-dom';

const PostTags = () => {
  return (
    <div className="post-tags">
      <Link to="#" className="tag">
        #Business
      </Link>
      <Link to="#" className="tag">
        #Tricks
      </Link>
      <Link to="#" className="tag">
        #Financial
      </Link>
      <Link to="#" className="tag">
        #Economy
      </Link>
    </div>
  );
};

export default PostTags;
