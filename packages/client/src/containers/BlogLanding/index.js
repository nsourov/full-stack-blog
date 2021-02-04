import React from 'react';
import { useSelector } from 'react-redux';

import BlogCard from 'src/components/BlogCard';

const BlogLanding = () => {
  const blogLanding = useSelector((store) => store.blogLanding);

  return (
    <div className="container">
      <div className="row">
        {Array.isArray(blogLanding) &&
          blogLanding.map((item) => (
            <div className="post col-xl-6" key={item.id}>
              <BlogCard
                thumbnail={item.thumbnail}
                date={item.date}
                category={item.category}
                title={item.title}
                description={item.description}
                avatar={item.avatar}
                name={item.name}
                postDate={item.postDate}
                comment={item.comment}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogLanding;
