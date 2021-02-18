import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fatchCategories } from '../../../state/ducks/category';

const Category = () => {
  const { data, loading } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchCategories());
  }, [dispatch]);
  return <div></div>;
};

export default Category;
