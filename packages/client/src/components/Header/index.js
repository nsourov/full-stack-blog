import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [collapse, setCollapse] = useState(false);
  const [searchBox, setSearchBox] = useState(false);

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className={`search-area ${searchBox ? 'd-block' : 'd-none'}`}>
          <div className="search-area-inner d-flex align-items-center justify-content-center">
            <div className="close-btn" onClick={() => setSearchBox(!searchBox)}>
              <i className="icon-close" />
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-8">
                <form action="#">
                  <div className="form-group">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="What are you looking for?"
                    />
                    <button type="submit" className="submit">
                      <i className="icon-search-1" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="navbar-header d-flex align-items-center justify-content-between">
            <Link to="/" className="navbar-brand">
              Bootstrap Blog
            </Link>

            <button
              onClick={() => setCollapse(!collapse)}
              type="button"
              data-toggle="collapse"
              data-target="#navbarcollapse"
              aria-controls="navbarcollapse"
              aria-expanded={`${collapse ? true : false}`}
              aria-label="Toggle navigation"
              className={`navbar-toggler ${collapse ? 'active' : 'collapsed'}`}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <div
            id="navbarcollapse"
            className={`navbar-collapse ${
              collapse ? 'collapse show' : 'collapse'
            }`}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link ">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/post" className="nav-link ">
                  Post
                </NavLink>
              </li>
            </ul>
            <div className="navbar-text">
              <Link
                onClick={() => setSearchBox(!searchBox)}
                to="#"
                className="search-btn"
              >
                <i className="icon-search-1" />
              </Link>
            </div>
            <ul className="langs navbar-text">
              <Link to="/signin" className="active btn btn-outline-primary">
                {/* EN */}
                sign in
              </Link>
              <span> </span>
              <Link className="btn btn-outline-primary" to="/signup">
                sign up
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
