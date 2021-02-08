import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fatchBlogs } from '../../state/ducks/blogs';
import BlogCard from '../../components/BlogCard';

import thumbnail1 from '../../assets/img/blog-post-1.jpg';
import avatar1 from '../../assets/img/avatar-1.jpg';

const BlogLanding = () => {
  const { data, loading } = useSelector((store) => store.blogs);

  const dispatch = useDispatch();

  const { page } = useParams();

  console.log('🚀 ~ file: index.js ~ line 19 ~ BlogLanding ~ data', data);
  useEffect(() => {
    if (page !== undefined) {
      dispatch(fatchBlogs(page));
    } else {
      dispatch(fatchBlogs(1));
    }
  }, [dispatch, page]);

  if (loading) {
    return 'Loading ...';
  }

  return (
    <div className="container">
      <div className="row">
        {Array.isArray(data.posts) &&
          data.posts.map((item) => (
            <div className="post col-xl-6" key={item._id}>
              <BlogCard
                thumbnail={item.thumbnail || thumbnail1}
                date={item.createdAt}
                category={item.category || 'Business'}
                title={item.title}
                description={
                  item.description ||
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.'
                }
                avatar={item.avatar || avatar1}
                name={item.name || 'Arif'}
                postDate={item.updatedAt}
                comment={item.comment || 0}
                slug={item.slug}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogLanding;
