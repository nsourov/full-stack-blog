import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Skeleton from '../../components/Skeleton';
import { fetchBlog } from '../../state/ducks/blogs';

import PostComments from '../../containers/PostComments';
import AddComment from './AddComment';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import PostMeta from './PostMeta';
import Slider from './Slider';

const Post = () => {
  const {
    data: { post },
    loading,
  } = useSelector((state) => state.blog);

  const dispatch = useDispatch();

  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchBlog(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    if (post) {
      document.title = post.title;
    }
  }, [post]);

  return (
    <main className='post blog-post'>
      <div className='container-fluid'>
        {!loading ? (
          <div className='post-single'>
            {post ? (
              <>
                {post.images.length ? (
                  <>
                    {post.images.length > 1 ? (
                      <Slider
                        items={post.images.map((p) => ({
                          src: p,
                          altText: 'image',
                        }))}
                      />
                    ) : (
                      <div className='post-thumbnail'>
                        <img
                          src={post.images[0]}
                          alt='...'
                          className='img-fluid'
                        />
                      </div>
                    )}
                  </>
                ) : (
                  ''
                )}

                <div className='post-details'>
                  <PostMeta category={post?.category?.name} />
                  <h1>
                    {post.title}
                    {/* <Link to='#'>
                  <i className='fa fa-bookmark-o' />
                </Link> */}
                  </h1>

                  <PostFooter
                    name={post.user.name || 'John doe'}
                    updatedAt={post.updatedAt}
                    comment={post.commentCount || 0}
                  />
                  <PostBody body={post.body} />
                  <PostComments postId={post._id} slug={post.slug} />
                  <AddComment slug={post.slug} />
                </div>
              </>
            ) : (
              <h1>No post found!</h1>
            )}
          </div>
        ) : (
          <div className='post-single'>
            <div className='post-thumbnail'>
              <Skeleton width='100%' height={200} bottom={10} />
            </div>
            <div className='post-details'>
              <h3 className='h4'>
                <Skeleton width='60%' height={10} />
              </h3>
              <Skeleton width='50%' height={10} />
              <Skeleton width='45%' height={10} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Post;
