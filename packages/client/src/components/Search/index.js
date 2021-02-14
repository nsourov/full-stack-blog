import React from 'react';

const Search = () => {
  return (
    <form action='#'>
      <div className='form-group'>
        <input
          type='search'
          name='search'
          id='search'
          placeholder='What are you looking for?'
        />
        <button type='submit' className='submit'>
          <i className='icon-search' />
        </button>
      </div>
    </form>
  );
};

export default Search;
