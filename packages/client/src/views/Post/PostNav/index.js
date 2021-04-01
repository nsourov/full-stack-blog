import React from 'react';
import { Link } from 'react-router-dom';

const PostNavs = ({ post }) => {
  return (
    <div className='posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row'>
      {post.prevPost ? (
        <Link to={`/blog/post/${post.prevPost.slug}`} className='prev-post text-left d-flex align-items-center'>
          <div className='icon prev'>
            <i className='fa fa-angle-left'></i>
          </div>
          <div className='text'>
            <strong className='text-primary'>Previous Article </strong>
            <h6>{post.prevPost.title}</h6>
          </div>
        </Link>
      ) : (
        ''
      )}
      {post.nextPost ? (
        <Link
          to={`/blog/post/${post.nextPost.slug}`}
          className='next-post text-right d-flex align-items-center justify-content-end'
        >
          <div className='text'>
            <strong className='text-primary'>Next Article </strong>
            <h6>{post.nextPost.title}</h6>
          </div>
          <div className='icon next'>
            <i className='fa fa-angle-right'> </i>
          </div>
        </Link>
      ) : (
        ''
      )}
    </div>
  );
};

export default PostNavs;
