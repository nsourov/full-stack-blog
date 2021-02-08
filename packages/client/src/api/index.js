import axios from 'axios';

const api = 'http://localhost:4000';

// API to get posts
export const getPublishedPosts = (page) => {
  return axios.get(`${api}/posts/published/page/${page}`);
};

// API to get post
export const getPost = (slug) => {
  return axios.get(`${api}/posts/${slug}`);
};

// Api to post register
export const registerVisitor = (data) => {
  return axios.post(`${api}/auth/register`, data);
};

// API to get me
export const me = (token) => {
  return axios.get(`${api}/auth/me`, {
    headers: { Authorization: token },
  });
};
