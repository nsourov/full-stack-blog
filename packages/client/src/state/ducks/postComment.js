import { createSlice } from '@reduxjs/toolkit';

import avatar from 'src/assets/img/avatar-1.jpg';

const postCommentData = [
  {
    id: 1,
    avatar: avatar,
    name: 'Jabi Hernandiz',
    date: 'May 2016',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
  },
  {
    id: 2,
    avatar: avatar,
    name: 'Jabi Hernandiz',
    date: 'May 2016',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
  },
  {
    id: 3,
    avatar: avatar,
    name: 'Jabi Hernandiz',
    date: 'May 2016',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
  },
];

const postCommentSlice = createSlice({
  name: 'postComment',
  initialState: postCommentData,
  reducers: {},
});

export default {
  postComments: postCommentSlice.reducer,
};
