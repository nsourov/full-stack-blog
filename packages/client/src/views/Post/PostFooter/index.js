import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from '../../../utils/dateFormat';

import avatars from '../../../assets/img/avatar-1.jpg';

const PostFooter = (props) => {
  const { comment, updatedAt, name, avatar } = props;
  return (
    <div className="post-footer d-flex align-items-center flex-column flex-sm-row">
      <Link to="#" className="author d-flex align-items-center flex-wrap">
        <div className="avatar">
          <img src={avatar || avatars} alt="..." className="img-fluid" />
        </div>
        <div className="title">
          <span>{name}</span>
        </div>
      </Link>
      <div className="d-flex align-items-center flex-wrap">
        <div className="date">
          <i className="icon-clock" /> {dateFormat(updatedAt)}
        </div>

        <div className="comments meta-last">
          <i className="icon-comment" />
          {comment}
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
