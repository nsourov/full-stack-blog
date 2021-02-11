import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fatchComments } from '../../state/ducks/blogs';
import PostComment from '../../components/PostComment';

const PostComments = ({ postId }) => {
  const [page, setPage] = useState(1);
  const { data, loading } = useSelector((state) => state.comments);
  const postComments = useSelector((store) => store.postComments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchComments(postId, page));
  }, [dispatch, page, postId]);

  if (loading) {
    return 'Loading';
  }

  console.log('object', data);
  return (
    <div className='post-comments'>
      <header>
        <h3 className='h6'>
          Post Comments
          <span className='no-of-comments'>({data.count})</span>
        </h3>
      </header>
      {Array.isArray(data.comments) &&
        data.comments.map((comment) => (
          <PostComment
            key={comment._id}
            avatar={comment.user.avatar}
            name={comment.user.name}
            date={comment.updatedAt}
            description={comment.body}
          />
        ))}
    </div>
  );
};

export default PostComments;
