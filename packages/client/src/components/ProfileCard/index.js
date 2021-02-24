import React from 'react';

import './style.css';

const WidgetSearch = () => {
  return (
    <div className='widget'>
      <div className='profile-card-4 text-center'>
        <img
          src='http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg'
          className='img img-responsive'
        ></img>
        <div className='profile-content'>
          <div className='profile-name'>Naimur</div>
          <div className='profile-description'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
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
};

export default WidgetSearch;
