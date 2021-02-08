import axios from 'axios';

const api = 'http://localhost:4000';
console.log('🚀 ~ file: index.js ~ line 4 ~ api', api);

// API to get posts
export const getPublishedPosts = (page) => {
  return axios.get(`${api}/posts/published/page/${page}`);
};

// API to get post
export const getPost = (slug) => {
  return axios.get(`${api}/posts/${slug}`);
};

// Api to register
export const registerVisitor = (data) => {
  return axios.post(`${api}/auth/register`, data);
};
