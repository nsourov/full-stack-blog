import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import dateFormat from '../../utils/dateFormat';
import Skeleton from '../../components/Skeleton';

const BlogCard = (props) => {
  const {
    thumbnail,
    date,
    category,
    title,
    description,
    avatar,
    name,
    postDate,
    comment,
    slug,
  } = props;

  return (
    <>
      <div className='post-thumbnail'>
        <Link to={`/post/${slug}`}>
          <img src={thumbnail} alt='...' className='img-fluid' />
        </Link>
      </div>
      <div className='post-details'>
        <div className='post-meta d-flex justify-content-between'>
          <div className='date meta-last'>{dateFormat(date)}</div>
          <div className='category'>
            <Link to='#'>{category.name}</Link>
          </div>
        </div>
        <Link className='d-block' to={`/post/${slug}`}>
          <h3 className='h4'>{title}</h3>
        </Link>
        <ReactMarkdown allowDangerousHtml children={description} />
        <div className='post-footer d-flex align-items-center'>
          <Link to='#' className='author d-flex align-items-center flex-wrap'>
            <div className='avatar'>
              <img src={avatar} alt='...' className='img-fluid' />
            </div>
            <div className='title'>
              <span>{name}</span>
            </div>
          </Link>
          <div className='date'>
            <i className='icon-clock' /> {dateFormat(postDate)}
          </div>
          <div className='comments meta-last'>
            <i className='icon-comment' />
            {comment}
          </div>
        </div>
      </div>
    </>
  );
};

BlogCard.propTypes = {
  date: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  postDate: PropTypes.string,
  comment: PropTypes.number,
};

export const Fallback = () => {
  return (
    <>
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
    </>
  );
};

export default BlogCard;
