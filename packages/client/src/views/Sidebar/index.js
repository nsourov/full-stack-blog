import React from 'react';

import WidgetSearch from '../../components/WidgetSearch';
import PostCategories from '../../containers/PostCategories';

const Sidebar = () => {
  return (
    <aside className="col-lg-4">
      <WidgetSearch />
      <PostCategories />
    </aside>
  );
};

export default Sidebar;
