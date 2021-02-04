import React from 'react';

import feature3 from 'src/assets/img/featured-pic-3.jpg';

const PostBody = () => {
  return (
    <div className="post-body">
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <p>
        {' '}
        <img src={feature3} alt="..." className="img-fluid" />
      </p>
    </div>
  );
};

export default PostBody;
