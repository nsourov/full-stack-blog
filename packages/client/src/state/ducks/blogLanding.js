import { createSlice } from '@reduxjs/toolkit';

import thumbnail1 from 'src/assets/img/blog-post-1.jpg';
import thumbnail2 from 'src/assets/img/blog-post-2.jpg';
import thumbnail3 from 'src/assets/img/blog-post-3.jpg';
import thumbnail4 from 'src/assets/img/blog-post-4.jpg';
import avatar1 from 'src/assets/img/avatar-1.jpg';
import avatar2 from 'src/assets/img/avatar-2.jpg';
import avatar3 from 'src/assets/img/avatar-3.jpg';

const blogLandingData = [
  {
    id: 1,
    thumbnail: thumbnail1,
    date: '20 May | 2016',
    category: 'Business',
    title: 'Alberto Savoia Can Teach You About Interior',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore.`,
    avatar: avatar1,
    name: 'John Doe',
    postDate: '2 months ago',
    comment: 12,
  },
  {
    id: 2,
    thumbnail: thumbnail2,
    date: '20 May | 2016',
    category: 'Business',
    title: 'Alberto Savoia Can Teach You About Interior',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore.`,
    avatar: avatar2,
    name: 'John Doe',
    postDate: '2 months ago',
    comment: 12,
  },
  {
    id: 3,
    thumbnail: thumbnail3,
    date: '20 May | 2016',
    category: 'Business',
    title: 'Alberto Savoia Can Teach You About Interior',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore.`,
    avatar: avatar3,
    name: 'John Doe',
    postDate: '2 months ago',
    comment: 12,
  },
  {
    id: 4,
    thumbnail: thumbnail4,
    date: '20 May | 2016',
    category: 'Business',
    title: 'Alberto Savoia Can Teach You About Interior',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore.`,
    avatar: avatar1,
    name: 'John Doe',
    postDate: '2 months ago',
    comment: 12,
  },
];

const blogLandingSlice = createSlice({
  name: 'blogLanding',
  initialState: blogLandingData,
  reducers: {},
});

export default {
  blogLanding: blogLandingSlice.reducer,
};
