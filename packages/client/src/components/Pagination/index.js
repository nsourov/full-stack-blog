import React from 'react';
import Pagination from 'react-js-pagination';

const Paginations = (props) => {
  const { activePage, countPerPage, count, onChange } = props;
  return (
    <nav aria-label='Page navigation example'>
      <Pagination
        innerClass='pagination pagination-template d-flex justify-content-center'
        activePage={activePage}
        itemsCountPerPage={countPerPage}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        onChange={onChange}
        linkClass='page-link'
        itemClass='page-item'
      />
    </nav>
  );
};

export default Paginations;
