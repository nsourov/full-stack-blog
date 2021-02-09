import React from 'react';

import BlogCard from '../../components/BlogCard';

import thumbnail1 from '../../assets/img/blog-post-1.jpg';
import avatar1 from '../../assets/img/avatar-1.jpg';

const BlogLanding = (props) => {
  const { data } = props;

  return Array.isArray(data.posts) ? (
    data.posts.map((item) => (
      <div className='post col-xl-6' key={item._id}>
        <BlogCard
          thumbnail={item.image || thumbnail1}
          date={item.createdAt}
          category={item.category || 'Business'}
          title={item.title}
          description={item.body}
          avatar={item.avatar || avatar1}
          name={item.name || 'Arif'}
          postDate={item.updatedAt}
          comment={item.comment || 0}
          slug={item.slug}
        />
      </div>
    ))
  ) : (
    <h5>No Post</h5>
  );
};

export default BlogLanding;
