import React from 'react';

import BlogLanding from 'src/containers/BlogLanding';
import Pagination from 'src/components/Pagination';

const Blog = () => {
  return (
    <main className="posts-listing col-lg-8">
      <BlogLanding />
      <Pagination />
    </main>
  );
};

export default Blog;
