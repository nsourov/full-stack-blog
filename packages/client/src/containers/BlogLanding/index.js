import React from 'react';

import BlogCard, { Fallback } from '../../components/BlogCard';

const BlogLanding = (props) => {
  const { data, loading } = props;

  if (loading) {
    return (
      <>
        <div className='post col-lg-10 col-md-12'>
          <Fallback />
        </div>
        <div className='post col-lg-10 col-md-12'>
          <Fallback />
        </div>
      </>
    );
  }

  return data?.posts ? (
    data.posts.map((item) => (
      <div className='post post-list col-lg-10 col-md-12' key={item._id}>
        <BlogCard
          thumbnail={item.image}
          date={item.createdAt}
          category={item.category || ''}
          title={item.title}
          description={item.body}
          name={item.user.name || 'User'}
          postDate={item.updatedAt}
          comment={item.commentCount || 0}
          slug={item.slug}
        />
      </div>
    ))
  ) : (
    <h5>No Post</h5>
  );
};

export default BlogLanding;
