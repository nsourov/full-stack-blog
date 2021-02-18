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

// API to get me
export const getUnpublishedPost = (page, token) => {
  return axios.get(`${api}/posts/unpublished/page/${page}`, {
    headers: { Authorization: token },
  });
};

// API to get me
export const getEditorRequests = (page, token) => {
  return axios.get(`${api}/requests/page/${page}`, {
    headers: { Authorization: token },
  });
};

// API to get me
export const acceptEditorRequest = (userId, body, token) => {
  return axios.put(`${api}/users/${userId}`, body, {
    headers: { Authorization: token },
  });
};

export const deleteEditorRequest = (userId, token) => {
  return axios.delete(`${api}/requests/${userId}`, {
    headers: { Authorization: token },
  });
};
