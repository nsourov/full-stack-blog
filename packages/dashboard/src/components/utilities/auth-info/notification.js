import React, { useState, useEffect } from 'react';
import { Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { AtbdTopDropdwon } from './auth-info-style';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';

import { getNotifications, getNotificationunreadCount } from '../../../api';

const PostNotification = ({ name, slug }) => {
  return (
    <li>
      <Link to={`/post/update/${slug}`}>
        <div className='atbd-top-dropdwon__content notifications'>
          <div className='notification-icon bg-primary'>
            <FeatherIcon icon='hard-drive' />
          </div>
          <div className='notification-content d-flex'>
            <div className='notification-text'>
              <Heading as='h5'>
                <span>{name}</span> created a post
              </Heading>
              <p>5 hours ago</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

const CommentNotification = ({ name, slug, postId }) => {
  return (
    <li>
      <Link to={`/post/comments/${slug}/${postId}`}>
        <div className='atbd-top-dropdwon__content notifications'>
          <div className='notification-icon bg-primary'>
            <FeatherIcon icon='message-square' />
          </div>
          <div className='notification-content d-flex'>
            <div className='notification-text'>
              <Heading as='h5'>
                <span>{name}</span> post a comment
              </Heading>
              <p>5 hours ago</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

const NotificationBox = () => {
  const [unread, setUnread] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [notification, setNotification] = useState(null);

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} props={props} />;
  };

  const renderTrackVertical = () => {
    const thumbStyle = {
      position: 'absolute',
      width: '6px',
      transition: 'opacity 200ms ease 0s',
      opacity: 0,
      right: '2px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px',
    };
    return <div className='hello' style={thumbStyle} />;
  };

  const renderView = ({ style, ...props }) => {
    return <div {...props} style={{ ...style }} />;
  };

  renderThumb.propTypes = {
    style: PropTypes.shape(PropTypes.object),
  };

  renderView.propTypes = {
    style: PropTypes.shape(PropTypes.object),
  };

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const { data } = await getNotifications(page, token);
        setPages(data?.pages);
        setNotification(data?.notifications);
        const res = await getNotificationunreadCount(token);
        setUnread(res?.data?.count);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotification();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = async () => {
    try {
      if (page < pages) {
        const token = localStorage.getItem('jwtToken');
        const { data } = await getNotifications(page + 1, token);
        setNotification([...notification, ...data?.notifications]);
        setPage(page + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(unread);

  const content = (
    <AtbdTopDropdwon className='atbd-top-dropdwon'>
      {/* <Heading as='h5' className='atbd-top-dropdwon__title'>
        <span className='title-text'>Notifications</span>
        <Badge className='badge-success' count={3} />
      </Heading> */}
      <Scrollbars
        autoHeight
        autoHide
        renderThumbVertical={renderThumb}
        renderView={renderView}
        renderTrackVertical={renderTrackVertical}
      >
        <ul className='atbd-top-dropdwon__nav notification-list'>
          {notification &&
            notification.map((item, i) => {
              if (item.action === 'post') {
                return (
                  <PostNotification
                    name={item?.user?.name}
                    slug={item?.post?.slug}
                  />
                );
              }
              if (item.action === 'comment') {
                return (
                  <CommentNotification
                    name={item?.user?.name}
                    slug={item?.post?.slug}
                    postId={item?.post?._id}
                  />
                );
              }
            })}
          {page !== pages && (
            <li>
              <Link onClick={loadMore} className='btn-seeAll' to='#'>
                Load more
              </Link>
            </li>
          )}
        </ul>
      </Scrollbars>
      <Link className='btn-seeAll' to='#'>
        Clear all notification
      </Link>
    </AtbdTopDropdwon>
  );

  return (
    <div className='notification'>
      <Popover placement='bottomLeft' content={content} action='click'>
        <Badge offset={[-8, -5]} count={unread > 9 ? '9+' : unread}>
          <Link to='#' className='head-example'>
            <FeatherIcon icon='bell' size={20} />
          </Link>
        </Badge>
      </Popover>
    </div>
  );
};

export default NotificationBox;
