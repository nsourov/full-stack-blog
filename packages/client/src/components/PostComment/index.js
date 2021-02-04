import React from 'react';
import PropTypes from 'prop-types';

const PostComment = (props) => {
  const { avatar, name, date, description } = props;

  return (
    <div className="comment">
      <div className="comment-header d-flex justify-content-between">
        <div className="user d-flex align-items-center">
          <div className="image">
            <img src={avatar} alt="..." className="img-fluid rounded-circle" />
          </div>
          <div className="title">
            <strong>{name}</strong>
            <span className="date">{date}</span>
          </div>
        </div>
      </div>
      <div className="comment-body">
        <p>{description}</p>
      </div>
    </div>
  );
};

PostComment.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};

export default PostComment;
