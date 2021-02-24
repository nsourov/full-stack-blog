import React from 'react';
import Search from '../Search';

const WidgetSearch = () => {
  return (
    <div className='widget search' style={{ padding: 30 }}>
      <header>
        <h3 className='h6'>Search the blog</h3>
      </header>
      <Search />
    </div>
  );
};

export default WidgetSearch;
