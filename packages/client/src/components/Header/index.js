import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logOutUser } from '../../state/ducks/authentication';
import RequestEditor from './RequestEditor';
import Search from '../Search';

import logo from '../../assets/img/logo.png';

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
                <Search action={() => setSearchBox(false)} />
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='navbar-header d-flex align-items-center justify-content-between'>
            <Link to='/' className='navbar-brand'>
              <img src={logo} alt='logo' />
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
            <ul className='navbar-nav ml-auto' />
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
                  <Link to='/signin' className='btn btn-link text-light'>
                    Sign In
                  </Link>
                  <Link className='active btn btn-outline-primary' to='/signup'>
                    Sign Up
                  </Link>{' '}
                </>
              )}
              {isAuthenticated && (
                <Link
                  to='#'
                  onClick={() => dispatch(logOutUser())}
                  className='btn btn-link text-light'
                >
                  Log Out
                </Link>
              )}
              {isAuthenticated &&
                (data.role === 'editor' || data.role === 'admin') && (
                  <Link
                    target='_blank'
                    to={process.env.REACT_APP_DASHBOARD_URL || '/'}
                    className='btn btn-info'
                  >
                    Dashboard
                  </Link>
                )}

              {isAuthenticated &&
                data.role === 'visitor' &&
                !data.editorRequested && (
                  <RequestEditor
                    data={data}
                    isAuthenticated={isAuthenticated}
                  />
                )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
