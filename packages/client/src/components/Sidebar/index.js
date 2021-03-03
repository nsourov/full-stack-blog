import React from 'react';

import ProfileCard from '../ProfileCard';
import PostCategories from '../../containers/PostCategories';

const Sidebar = () => {
  return (
    <aside className='col-lg-4'>
      <ProfileCard />
      <PostCategories />
    </aside>
  );
};

export default Sidebar;
