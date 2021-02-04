import React from 'react';
import { useSelector } from 'react-redux';

import PostComment from 'src/components/PostComment';

const PostComments = () => {
  const postComments = useSelector((store) => store.postComments);

  return (
    <div className="post-comments">
      <header>
        <h3 className="h6">
          Post Comments
          <span className="no-of-comments">({postComments.length})</span>
        </h3>
      </header>
      {Array.isArray(postComments) &&
        postComments.map((comment) => (
          <PostComment
            key={comment.id}
            avatar={comment.avatar}
            name={comment.name}
            date={comment.date}
            description={comment.description}
          />
        ))}
    </div>
  );
};

export default PostComments;
