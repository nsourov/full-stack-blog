import React from 'react';
import { useSelector } from 'react-redux';

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
                  <button className='btn btn-block'>CONTACT ME</button>
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
