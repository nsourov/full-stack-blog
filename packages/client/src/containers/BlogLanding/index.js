import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { fatchBlogs } from '../../state/ducks/blogs';
import BlogCard from '../../components/BlogCard';

import thumbnail1 from '../../assets/img/blog-post-1.jpg';
import avatar1 from '../../assets/img/avatar-1.jpg';

const BlogLanding = () => {
  const { data, loading } = useSelector((store) => store.blogs);

  const dispatch = useDispatch();

  const { page } = useParams();

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
    <div className='container'>
      <div className='row'>
        {Array.isArray(data.posts) &&
          data.posts.map((item) => (
            <div className='post col-xl-6' key={item._id}>
              <BlogCard
                thumbnail={item.thumbnail || thumbnail1}
                date={item.createdAt}
                category={item.category || 'Business'}
                title={item.title}
                description={
                  <ReactMarkdown allowDangerousHtml children={item.body} />
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
