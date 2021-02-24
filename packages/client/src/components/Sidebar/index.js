import React from 'react';

import WidgetSearch from '../WidgetSearch';
import ProfileCard from '../ProfileCard';
import PostCategories from '../../containers/PostCategories';

const Sidebar = () => {
  return (
    <aside className='col-lg-4'>
      <WidgetSearch />
      <ProfileCard />
      <PostCategories />
    </aside>
  );
};

export default Sidebar;
