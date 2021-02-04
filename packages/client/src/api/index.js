import axios from 'axios';

const api = process.env.API_URL;

// API to get hero slider
export const getPublishedPost = (page) => {
  return axios.get(`${api}/posts/published/page/${page}`);
};
