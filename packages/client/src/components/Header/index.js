import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logOutUser } from '../../state/ducks/authentication';

const Header = () => {
  const [collapse, setCollapse] = useState(false);
  const [searchBox, setSearchBox] = useState(false);

  const dispatch = useDispatch();

  const { data, isAuthenticated } = useSelector((store) => store.user);

  return (
    <header className='header'>
      <nav className='navbar navbar-expand-lg'>
        <div className={`search-area ${searchBox ? 'd-block' : 'd-none'}`}>
          <div className='search-area-inner d-flex align-items-center justify-content-center'>
            <div className='close-btn' onClick={() => setSearchBox(!searchBox)}>
              <i className='icon-close' />
            </div>
            <div className='row d-flex justify-content-center'>
              <div className='col-md-8'>
                <form action='#'>
                  <div className='form-group'>
                    <input
                      type='search'
                      name='search'
                      id='search'
                      placeholder='What are you looking for?'
                    />
                    <button type='submit' className='submit'>
                      <i className='icon-search-1' />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='navbar-header d-flex align-items-center justify-content-between'>
            <Link to='/' className='navbar-brand'>
              Bootstrap Blog
            </Link>

            <button
              onClick={() => setCollapse(!collapse)}
              type='button'
              data-toggle='collapse'
              data-target='#navbarcollapse'
              aria-controls='navbarcollapse'
              aria-expanded={collapse}
              aria-label='Toggle navigation'
              className={`navbar-toggler ${collapse ? 'active' : 'collapsed'}`}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <div
            id='navbarcollapse'
            className={`navbar-collapse ${
              collapse ? 'collapse show' : 'collapse'
            }`}
          >
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <NavLink exact to='/' className='nav-link '>
                  Blog
                </NavLink>
              </li>
            </ul>
            <div className='navbar-text'>
              <Link
                onClick={() => setSearchBox(!searchBox)}
                to='#'
                className='search-btn'
              >
                <i className='icon-search-1' />
              </Link>
            </div>
            <ul className='langs navbar-text'>
              {!isAuthenticated && (
                <>
                  <Link to='/signin' className='active btn btn-outline-primary'>
                    sign in
                  </Link>
                  <span> </span>
                  <Link className='btn btn-outline-primary' to='/signup'>
                    sign up
                  </Link>{' '}
                </>
              )}
              {isAuthenticated && (
                <a
                  href='#'
                  onClick={() => dispatch(logOutUser())}
                  className='btn btn-link'
                >
                  Log Out
                </a>
              )}
              {isAuthenticated && data.role === 'editor' && (
                <a
                  target='_blank'
                  href='http://localhost:3000/'
                  className='btn btn-success'
                >
                  Dashboard
                </a>
              )}

              {isAuthenticated && data.role === 'visitor' && (
                <a href='#' className='btn btn-success'>
                  Request Editor
                </a>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
