import React from 'react';
import { Link } from 'react-router-dom';

const PostNavs = () => {
  return (
    <div className="posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row">
      <Link to="#" className="prev-post text-left d-flex align-items-center">
        <div className="icon prev">
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="text">
          <strong className="text-primary">Previous Post </strong>
          <h6>I Bought a Wedding Dress.</h6>
        </div>
      </Link>
      <Link
        to="#"
        className="next-post text-right d-flex align-items-center justify-content-end"
      >
        <div className="text">
          <strong className="text-primary">Next Post </strong>
          <h6>I Bought a Wedding Dress.</h6>
        </div>
        <div className="icon next">
          <i className="fa fa-angle-right"> </i>
        </div>
      </Link>
    </div>
  );
};

export default PostNavs;
