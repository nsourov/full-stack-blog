import React from 'react';

const WidgetSearch = () => {
  return (
    <div className="widget search">
      <header>
        <h3 className="h6">Search the blog</h3>
      </header>
      <form action="#" className="search-form">
        <div className="form-group">
          <input type="search" placeholder="What are you looking for?" />
          <button type="submit" className="submit">
            <i className="icon-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default WidgetSearch;
