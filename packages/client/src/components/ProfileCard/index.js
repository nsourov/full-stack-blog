import React from 'react';
import { useSelector } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { store } from 'react-notifications-component';

import './style.css';

const WidgetSearch = () => {
  const admin = useSelector((state) => state.user.admin);

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
                  <button className='btn'>GUEST POST</button>
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
                        insert: 'top',
                        container: 'top-right',
                        animationIn: ['animate__animated', 'animate__fadeIn'],
                        animationOut: ['animate__animated', 'animate__fadeOut'],
                        dismiss: {
                          duration: 2000,
                          onScreen: true,
                        },
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
};
export default WidgetSearch;
