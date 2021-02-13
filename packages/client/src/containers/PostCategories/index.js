import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import PostCategory from '../../components/PostCategory';
import { getCategories } from '../../api';

const PostCategories = () => {
  const postCategories = useSelector((store) => store.postCategories);

  useEffect(() => {
    async function ac() {
      try {
        const data = await getCategories();
        console.log('🚀 ~ file: index.js ~ line 14 ~ ac ~ data', data);
      } catch (error) {
        console.log(error);
      }
    }
    ac();
  }, []);
  return (
    <div className='widget categories'>
      <header>
        <h3 className='h6'>Categories</h3>
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
