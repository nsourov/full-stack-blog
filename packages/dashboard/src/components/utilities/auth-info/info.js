import React from 'react';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useSelector, useDispatch } from 'react-redux';
import { InfoWraper, UserDropDwon } from './auth-info-style';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';
import Notification from './notification';

import { logOutUser } from '../../../state/ducks/authentication';

const AuthInfo = () => {
  const user = useSelector((state) => state.user.data);
  console.log('🚀 ~ file: info.js ~ line 15 ~ AuthInfo ~ user', user);
  const dispatch = useDispatch();
  const SignOut = (e) => {
    e.preventDefault();
    window.location = '/signin';
    dispatch(logOutUser());
  };

  const userContent = (
    <UserDropDwon>
      <div className='user-dropdwon'>
        <figure className='user-dropdwon__info'>
          <Avatar icon={<FeatherIcon icon='user' />} />
          <figcaption style={{ marginLeft: 15 }}>
            <Heading as='h5'>{user?.name}</Heading>
            <p>{user?.role}</p>
          </figcaption>
        </figure>
        <ul className='user-dropdwon__links'>
          <li>
            <Link to='/'>
              <FeatherIcon icon='user' /> Profile
            </Link>
          </li>
        </ul>
        <Link className='user-dropdwon__bottomAction' onClick={SignOut} to='#'>
          <FeatherIcon icon='log-out' /> Sign Out
        </Link>
      </div>
    </UserDropDwon>
  );

  return (
    <InfoWraper>
      {user?.role === 'admin' && <Notification />}

      <div className='nav-author'>
        <Popover placement='bottomRight' content={userContent} action='click'>
          <Link to='#' className='head-example'>
            <Avatar icon={<FeatherIcon icon='user' />} />
          </Link>
        </Popover>
      </div>
    </InfoWraper>
  );
};

export default AuthInfo;
