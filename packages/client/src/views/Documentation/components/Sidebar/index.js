import React from 'react';

const Sidebar = (props) => {
  const { heading, children } = props;
  return (
    <div className="sidebar-wrapper sticky-top">
      <h6>{heading}</h6>
      {children}
    </div>
  );
};

export default Sidebar;
