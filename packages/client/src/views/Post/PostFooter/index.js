import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from '../../../utils/dateFormat';

const PostFooter = (props) => {
  const { comment, updatedAt, name } = props;
  return (
    <div className='post-footer d-flex align-items-center flex-column flex-sm-row'>
      <Link to='#' className='author d-flex align-items-center flex-wrap'>
        <div className='avatar'>
          <i className='fa fa-user-circle fa-2x' aria-hidden='true'></i>
        </div>
        <div className='title'>
          <span>{name}</span>
        </div>
      </Link>
      <div className='d-flex align-items-center flex-wrap'>
        <div className='date'>
          <i className='icon-clock' /> {dateFormat(updatedAt)}
        </div>

        <div className='comments meta-last'>
          <i className='icon-comment' />
          {comment}
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
