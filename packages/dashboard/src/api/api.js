import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

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

// API to get me
export const getPublishedPost = (page) => {
  return axios.get(`${api}/posts/published/page/${page}`);
};
