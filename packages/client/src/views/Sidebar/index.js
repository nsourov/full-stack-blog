import React from 'react';

import WidgetSearch from 'src/components/WidgetSearch';
import PostCategories from 'src/containers/PostCategories';

const Sidebar = () => {
  return (
    <aside className="col-lg-4">
      <WidgetSearch />
      <PostCategories />
    </aside>
  );
};

export default Sidebar;
