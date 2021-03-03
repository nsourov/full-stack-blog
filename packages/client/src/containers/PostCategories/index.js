import React, { useEffect, useState } from 'react';

import PostCategory from '../../components/PostCategory';
import { getCategories } from '../../api';

const PostCategories = () => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const { data } = await getCategories();
        setCategory(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategory();
  }, []);


  return (
    <div className='widget categories' style={{ padding: 30 }}>
      <header>
        <h3 className='h6'>Categories</h3>
      </header>
      {category?.categories &&
        category?.categories.map((item) => (
          <PostCategory
            name={item.name}
            count={item.postCount}
            key={item._id}
          />
        ))}
    </div>
  );
};

export default PostCategories;
