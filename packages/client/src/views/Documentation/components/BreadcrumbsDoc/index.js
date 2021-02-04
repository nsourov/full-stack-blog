import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import DocCard from '../DocCard';

const BreadcrumbsDoc = () => {
  return (
    <DocCard title="breadcrumbs" id="breadcrumbs">
      {' '}
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Library
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Data
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Bootstrap
        </BreadcrumbItem>
      </Breadcrumb>
    </DocCard>
  );
};

export default BreadcrumbsDoc;
