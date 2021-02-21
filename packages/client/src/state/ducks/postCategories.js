import { createSlice } from '@reduxjs/toolkit';

const postCategoriesData = [
  {
    id: 1,
    name: 'Growth',
    count: 12,
  },
  {
    id: 2,
    name: 'Local',
    count: 25,
  },
  {
    id: 3,
    name: 'Sales',
    count: 8,
  },
  {
    id: 4,
    name: 'Tips',
    count: 17,
  },
  {
    id: 5,
    name: 'Local',
    count: 25,
  },
];

const postCategoriesSlice = createSlice({
  name: 'postCategories',
  initialState: postCategoriesData,
  reducers: {},
});

export default {
  postCategories: postCategoriesSlice.reducer,
};
