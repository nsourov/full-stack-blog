import React, { useState, useEffect } from 'react';
import { Badge, Empty } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import moment from 'moment';

import { AtbdTopDropdwon } from './auth-info-style';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';

import {
  getNotifications,
  getNotificationunreadCount,
  clearNotification,
  readNotification,
} from '../../../api';

const PostNotification = ({ notification, onClick }) => {
  return (
    <li>
      <Link
        target='__blank'
        onClick={() => !notification.read && onClick(notification._id)}
        to={`/post/update/${notification.post.slug}`}
      >
        <div className='atbd-top-dropdwon__content notifications'>
          <div className='notification-icon bg-primary'>
            <FeatherIcon icon='hard-drive' style={{ color: '#f368e0' }} />
          </div>
          <div className='notification-content d-flex'>
            <div className='notification-text'>
              <Heading as='h5'>
                {notification.user.name} {notification.messagePrefix}{' '}
                <span>guest post</span>
              </Heading>
              <p>{moment(notification.createdAt).fromNow()}</p>
            </div>
          </div>
          {!notification.read ? (
            <div style={{ float: 'right', marginTop: '20px' }}>
              <FeatherIcon icon='mail' style={{ color: '#7f8c8d' }} size='15' />
            </div>
          ) : (
              ''
            )}
        </div>
      </Link>
    </li>
  );
};

const CommentNotification = ({ notification, onClick }) => {
  return (
    <li>
      <Link
        target='__blank'
        onClick={() => !notification.read && onClick(notification._id)}
        to={`/post/comments/${notification.post.slug}/${notification.post._id}`}
      >
        <div className='atbd-top-dropdwon__content notifications'>
          <div className='notification-icon bg-primary'>
            <FeatherIcon icon='message-square' style={{ color: 'black' }} />
          </div>
          <div className='notification-content d-flex'>
            <div className='notification-text'>
              <Heading as='h5'>
                {notification.user.name} {notification.messagePrefix}{' '}
                <span>post</span>
              </Heading>
              <p>{moment(notification.createdAt).fromNow()}</p>
            </div>
          </div>
          {!notification.read ? (
            <div style={{ float: 'right', marginTop: '20px' }}>
              <FeatherIcon icon='mail' style={{ color: '#7f8c8d' }} size='15' />
            </div>
          ) : (
              ''
            )}
        </div>
      </Link>
    </li>
  );
};
const WouldBuyNotification = ({ notification, onClick }) => {
  return (
    <li>
      <Link
        target='__blank'
        onClick={() => !notification.read && onClick(notification._id)}
        to={`/post/update/${notification.post.slug}`}
      >
        <div className='atbd-top-dropdwon__content notifications'>
          <div className='notification-icon bg-primary'>
            <FeatherIcon icon='shopping-bag' style={{ color: '#68b9f3' }} />
          </div>
          <div className='notification-content d-flex'>
            <div className='notification-text'>
              <Heading as='h5'>
                {notification.user.name} {notification.messagePrefix}{' '}
                <span>this item.</span>
              </Heading>
              <p>{moment(notification.createdAt).fromNow()}</p>
            </div>
          </div>
          {!notification.read ? (
            <div style={{ float: 'right', marginTop: '20px' }}>
              <FeatherIcon icon='mail' style={{ color: '#7f8c8d' }} size='15' />
            </div>
          ) : (
              ''
            )}
        </div>
      </Link>
    </li>
  );
};

const NotificationBox = () => {
  const [unread, setUnread] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [notification, setNotification] = useState([]);

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

  const readnotification = async (notificationId) => {
    try {
      const token = localStorage.getItem('jwtToken');
      await readNotification(notificationId, token);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNotification = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      await clearNotification(token);
      setNotification([]);
      setUnread(0);
    } catch (error) {
      console.log(error);
    }
  };

  const content = (
    <AtbdTopDropdwon className='atbd-top-dropdwon'>
      <Heading as='h5' className='atbd-top-dropdwon__title'>
        <span className='title-text'>Unread Notifications</span>
        <Badge className='badge-success' count={unread} showZero />
      </Heading>
      {notification.length > 0 ? (
        <>
          <Scrollbars
            autoHeight
            autoHide
            renderThumbVertical={renderThumb}
            renderView={renderView}
            renderTrackVertical={renderTrackVertical}
          >
            <ul className='atbd-top-dropdwon__nav notification-list'>
              {notification.map((item, i) => {
                if (item.action === 'post') {
                  return (
                    <PostNotification
                      key={i}
                      notification={item}
                      onClick={readnotification}
                    />
                  );
                }
                if (item.action === 'comment') {
                  return (
                    <CommentNotification
                      key={i}
                      notification={item}
                      onClick={readnotification}
                    />
                  );
                }
                if (item.action === 'wouldBuy') {
                  return (
                    <WouldBuyNotification
                      key={i}
                      notification={item}
                      onClick={readnotification}
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
          <Link onClick={deleteNotification} className='btn-seeAll' to='#'>
            Clear all notification
          </Link>
        </>
      ) : (
          <Empty description='No notification' />
        )}
    </AtbdTopDropdwon>
  );
  return (
    <div className='notification'>
      <Popover placement='bottomLeft' content={content} action='click'>
        <Badge dot={unread > 0 ? true : false}>
          <Link to='#' className='head-example'>
            <FeatherIcon icon='bell' size={20} />
          </Link>
        </Badge>
      </Popover>
    </div>
  );
};

export default NotificationBox;
