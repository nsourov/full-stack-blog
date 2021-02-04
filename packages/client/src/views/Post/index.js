import React from 'react';
import { Link } from 'react-router-dom';

import blog3 from 'src/assets/img/blog-post-3.jpg';

import PostTags from './PostTags';
import PostNavs from './PostNavs';
import PostComments from 'src/containers/PostComments';
import AddComment from './AddComment';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import PostMeta from './PostMeta';

const Post = () => {
  return (
    <main className="post blog-post col-lg-8">
      <div className="container">
        <div className="post-single">
          <div className="post-thumbnail">
            <img src={blog3} alt="..." className="img-fluid" />
          </div>
          <div className="post-details">
            <PostMeta />
            <h1>
              Diversity in Engineering: The Effect on Questions
              <Link to="#">
                <i className="fa fa-bookmark-o"></i>
              </Link>
            </h1>
            <PostFooter />
            <PostBody />
            <PostTags />
            <PostNavs />
            <PostComments />
            <AddComment />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Post;
