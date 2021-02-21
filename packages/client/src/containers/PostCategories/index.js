import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PostCategory from '../../components/PostCategory';
import { getCategories } from '../../api';

const PostCategories = () => {
  const postCategories = useSelector((store) => store.postCategories);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fatchCategory() {
      try {
        setLoading(true);
        const { data } = await getCategories();
        setCategory(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fatchCategory();
  }, []);

  console.log('category',category);

  return (
    <div className='widget categories'>
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
