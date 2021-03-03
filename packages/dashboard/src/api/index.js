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
export const getPublishedPost = (page, role, userId) => {
  if (role === 'admin') {
    return axios.get(`${api}/posts/published/page/${page}`);
  } else {
    return axios.get(`${api}/posts/${userId}/published/page/${page}`);
  }
};
export const getPublishedGuestPost = (page, role, token) => {
  if (role === 'admin') {
    return axios.get(`${api}/posts/published/guest/page/${page}`, {
      headers: { Authorization: token },
    });
  }
};

// API to get me
export const getUnpublishedPost = (page, token, role, userId) => {
  if (role === 'admin') {
    return axios.get(`${api}/posts/unpublished/page/${page}`, {
      headers: { Authorization: token },
    });
  } else {
    return axios.get(`${api}/posts/${userId}/unpublished/page/${page}`, {
      headers: { Authorization: token },
    });
  }
};

// API to get me
export const getUnpublishedGuestPost = (page, token, role) => {
  if (role === 'admin') {
    return axios.get(`${api}/posts/unpublished/guest/page/${page}`, {
      headers: { Authorization: token },
    });
  }
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

export const getCategories = () => {
  return axios.get(`${api}/categories`);
};

export const getCategory = (slug) => {
  return axios.get(`${api}/categories/${slug}`);
};

export const createCategory = (body, token) => {
  return axios.post(`${api}/categories`, body, {
    headers: { Authorization: token },
  });
};

export const deleteCategory = (slug, token) => {
  return axios.delete(`${api}/categories/${slug}`, {
    headers: { Authorization: token },
  });
};

export const updateCategory = (slug, body, token) => {
  return axios.put(`${api}/categories/${slug}`, body, {
    headers: { Authorization: token },
  });
};

export const getUnPublishedComments = (postId, page, token) => {
  return axios.get(`${api}/posts/${postId}/comments/unpublished/page/${page}`, {
    headers: { Authorization: token },
  });
};

export const createPost = (body, token) => {
  return axios.post(`${api}/posts`, body, {
    headers: { Authorization: token },
  });
};

export const getPost = (slug) => {
  return axios.get(`${api}/posts/${slug}`);
};

export const updatePost = (slug, body, token) => {
  return axios.put(`${api}/posts/${slug}`, body, {
    headers: { Authorization: token },
  });
};

export const publishPost = (slug, body, token) => {
  return axios.put(`${api}/posts/${slug}/publish`, body, {
    headers: { Authorization: token },
  });
};

export const createPublishPost = (body, token) => {
  return axios.post(`${api}/posts/create-publish`, body, {
    headers: { Authorization: token },
  });
};

export const publishedComment = (slug, commentId, body, token) => {
  return axios.put(`${api}/posts/${slug}/comment/${commentId}`, body, {
    headers: { Authorization: token },
  });
};

export const deletePost = (slug, token) => {
  return axios.delete(`${api}/posts/${slug}`, {
    headers: { Authorization: token },
  });
};

export const getUsers = (page, token) => {
  return axios.get(`${api}/users/page/${page}`, {
    headers: { Authorization: token },
  });
};

export const updateUser = (userId, body, token) => {
  return axios.put(`${api}/users/profile/${userId}`, body, {
    headers: { Authorization: token },
  });
};

export const deleteUser = (userId, token) => {
  return axios.delete(`${api}/users/${userId}`, {
    headers: { Authorization: token },
  });
};
