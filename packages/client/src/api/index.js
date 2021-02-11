import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

// API to get posts
export const getPublishedPosts = (page) => {
  return axios.get(`${api}/posts/published/page/${page}`);
};

// API to get post
export const getPost = (slug) => {
  return axios.get(`${api}/posts/${slug}`);
};

// API to get post comments
export const getPostComments = (postId, page) => {
  return axios.get(`${api}/posts/${postId}/comments/published/page/${page}`);
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

// API to post login
export const login = (data) => {
  return axios.post(`${api}/auth/login`, data);
};

// API to request to editor
export const requestEditor = () => {
  return axios.post(`${api}/requests`);
};
