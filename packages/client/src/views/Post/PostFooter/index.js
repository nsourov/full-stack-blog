import React from 'react';
import { Link } from 'react-router-dom';

import avatar from 'src/assets/img/avatar-1.jpg';

const PostFooter = () => {
  return (
    <div className="post-footer d-flex align-items-center flex-column flex-sm-row">
      <Link to="#" className="author d-flex align-items-center flex-wrap">
        <div className="avatar">
          <img src={avatar} alt="..." className="img-fluid" />
        </div>
        <div className="title">
          <span>John Doe</span>
        </div>
      </Link>
      <div className="d-flex align-items-center flex-wrap">
        <div className="date">
          <i className="icon-clock"></i> 2 months ago
        </div>
        <div className="views">
          <i className="icon-eye"></i> 500
        </div>
        <div className="comments meta-last">
          <i className="icon-comment"></i>12
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
