import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-template d-flex justify-content-center">
        <li className="page-item">
          <Link to="#" className="page-link">
            {' '}
            <i className="fa fa-angle-left"></i>
          </Link>
        </li>
        <li className="page-item">
          <Link to="#" className="page-link active">
            1
          </Link>
        </li>
        <li className="page-item">
          <Link to="#" className="page-link">
            2
          </Link>
        </li>
        <li className="page-item">
          <Link to="#" className="page-link">
            3
          </Link>
        </li>
        <li className="page-item">
          <Link to="#" className="page-link">
            {' '}
            <i className="fa fa-angle-right"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
