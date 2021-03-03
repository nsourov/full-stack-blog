import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { store } from 'react-notifications-component';

import { toggleGuestPostModal } from '../../state/ducks/blogs';
import GuestPostModal from '../GuestPost';

import './style.css';

const style = {
  insert: 'top',
  container: 'top-right',
  animationIn: ['animate__animated', 'animate__fadeIn'],
  animationOut: ['animate__animated', 'animate__fadeOut'],
  dismiss: {
    duration: 2000,
    onScreen: true,
  },
};

const ProfileCard = () => {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.user.admin);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const toggle = () => {
    if (isAuthenticated) {
      dispatch(toggleGuestPostModal());
    } else {
      store.addNotification({
        message: 'Please signin to create post as guest',
        type: 'danger',
        ...style,
      });
    }
  };

  // https://i.stack.imgur.com/l60Hf.png
  if (admin) {
    return (
      <div className='widget'>
        <div className='profile-card-4 text-center'>
          <img
            src={admin.image || 'https://i.stack.imgur.com/l60Hf.png'}
            className='img img-fluid'
            width='100%'
          ></img>
          <div className='profile-content'>
            <div className='profile-name'>{admin.name}</div>
            <div className='profile-description'>{admin.bio}</div>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='profile-overview'>
                  <GuestPostModal />
                  <button className='btn' onClick={toggle}>
                    GUEST POST
                  </button>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='profile-overview'>
                  <CopyToClipboard
                    text={admin.email}
                    onCopy={() => {
                      store.addNotification({
                        message: 'Email copied to clipboard',
                        type: 'info',
                        ...style,
                      });
                    }}
                  >
                    <button className='btn btn-block'>CONTACT ME</button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return '';
};
export default ProfileCard;
