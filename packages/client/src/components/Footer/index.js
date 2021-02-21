import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="logo">
              <h6 className="text-white">Bootstrap Blog</h6>
            </div>
            <div className="contact-details">
              <p>53 Broadway, Broklyn, NY 11249</p>
              <p>Phone: (020) 123 456 789</p>
              <p>
                Email: <a href="mailto:info@company.com">Info@Company.com</a>
              </p>
              <ul className="social-menu">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-behance"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>&copy; 2021. All rights reserved. Your great site.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
