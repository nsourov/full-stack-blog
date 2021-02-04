import React from 'react';
import { useSelector } from 'react-redux';

import PostCategory from 'src/components/PostCategory';

const PostCategories = () => {
  const postCategories = useSelector((store) => store.postCategories);

  return (
    <div className="widget categories">
      <header>
        <h3 className="h6">Categories</h3>
      </header>
      {Array.isArray(postCategories) &&
        postCategories.map((category) => (
          <PostCategory
            name={category.name}
            count={category.count}
            key={category.id}
          />
        ))}
    </div>
  );
};

export default PostCategories;
