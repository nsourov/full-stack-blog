import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fatchBlog } from 'src/state/ducks/blogs';
import blog3 from 'src/assets/img/blog-post-3.jpg';

import PostComments from 'src/containers/PostComments';
import PostTags from './PostTags';
import PostNavs from './PostNavs';
import AddComment from './AddComment';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import PostMeta from './PostMeta';

const Post = () => {
  const {
    data: { post },
    loading,
  } = useSelector((state) => state.blog);

  const dispatch = useDispatch();

  const { slug } = useParams();

  useEffect(() => {
    dispatch(fatchBlog(slug));
  }, [dispatch, slug]);

  if (loading) {
    return 'Loading...';
  }
  console.log('post', post);

  return (
    <main className="post blog-post col-lg-8">
      <div className="container">
        {post && (
          <div className="post-single">
            <div className="post-thumbnail">
              <img src={blog3} alt="..." className="img-fluid" />
            </div>
            <div className="post-details">
              <PostMeta />
              <h1>
                {post.title}
                <Link to="#">
                  <i className="fa fa-bookmark-o" />
                </Link>
              </h1>

              <PostFooter
                name={post.name || 'John doe'}
                updatedAt={post.updatedAt}
                image={post.avatar}
                comment={post.comment || 0}
              />
              <PostBody body={post.body} />
              <PostTags />
              <PostNavs />
              <PostComments />
              <AddComment />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Post;
