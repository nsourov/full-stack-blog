import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import DocCard from '../DocCard';

const PaginationDoc = () => {
  return (
    <DocCard title="pagination" id="pagination">
      {/** simple pagination */}
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <a className="page-link" href="#">
            Previous
          </a>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <a className="page-link" href="#">
            Next
          </a>
        </PaginationItem>
      </Pagination>
      <hr />
      {/** works with icons pagination */}
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </PaginationItem>
      </Pagination>
      <hr />
      {/** active and disabled state pagination */}
      <Pagination aria-label="Page navigation example">
        <PaginationItem disabled>
          <a className="page-link" href="#">
            Previous
          </a>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <a className="page-link" href="#">
            Next
          </a>
        </PaginationItem>
      </Pagination>
      <hr />
      {/** sizing of pagination */}
      <Pagination aria-label="Page navigation example" size="lg">
        <PaginationItem>
          <a className="page-link" href="#">
            Previous
          </a>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <a className="page-link" href="#">
            Next
          </a>
        </PaginationItem>
      </Pagination>
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <a className="page-link" href="#">
            Previous
          </a>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <a className="page-link" href="#">
            Next
          </a>
        </PaginationItem>
      </Pagination>
      {/** small pagination */}
      <Pagination aria-label="Page navigation example" size="sm">
        <PaginationItem>
          <a className="page-link" href="#">
            Previous
          </a>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <a className="page-link" href="#">
            Next
          </a>
        </PaginationItem>
      </Pagination>
    </DocCard>
  );
};

export default PaginationDoc;
