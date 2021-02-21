import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostCategory = (props) => {
  const { name, count } = props;

  return (
    <div className="item d-flex justify-content-between">
      <Link to="#">{name}</Link>
      <span>{count}</span>
    </div>
  );
};

PostCategory.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
};

export default PostCategory;
