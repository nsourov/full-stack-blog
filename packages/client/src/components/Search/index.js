import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { setSearchString } from '../../state/ducks/blogs';

const Search = (props) => {
  const { action } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const onSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    if (value) {
      dispatch(setSearchString(value));
      if (!location.pathname.includes('/search')) {
        history.push('/search');
      }
      if (action) {
        action();
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
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
