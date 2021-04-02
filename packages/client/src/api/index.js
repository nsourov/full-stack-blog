import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

// API to get posts
export const getPublishedPosts = (page) => {
  return axios.get(`${api}/posts/published/page/${page}`);
};

export const getPublishedCategoryPosts = (slug, page) => {
  return axios.get(`${api}/posts/published/category/${slug}/page/${page}`);
};

// API to get post
export const getPost = (slug) => {
  return axios.get(`${api}/posts/${slug}`);
};

// API to get post comments
export const getPostComments = (postId, page) => {
  return axios.get(`${api}/posts/${postId}/comments/published/page/${page}`);
};

// API to get search post
export const getSearchPost = (searchString, page) => {
  return axios.get(`${api}/posts/search/${searchString}/page/${page}`);
};

// API to create comments
export const createComment = (slug, body, token) => {
  return axios.post(`${api}/posts/${slug}/comment`, body, {
    headers: { Authorization: token },
  });
};

// API to update comments
export const updateComment = (slug, commentId, body, token) => {
  return axios.put(`${api}/posts/${slug}/comment/${commentId}`, body, {
    headers: { Authorization: token },
  });
};

// API to delete comments
export const deleteComment = (slug, commentId, token) => {
  return axios.delete(`${api}/posts/${slug}/comment/${commentId}`, {
    headers: { Authorization: token },
  });
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

export const getAdmin = () => {
  return axios.get(`${api}/users/admin-info`);
};

// API to post login
export const login = (data) => {
  return axios.post(`${api}/auth/login`, data);
};

// API to request to editor
export const requestEditor = (token) => {
  return axios.post(
    `${api}/requests`,
    {},
    {
      headers: { Authorization: token },
    }
  );
};

// API to get posts
export const getCategories = () => {
  return axios.get(`${api}/categories`);
};

export const createGuestPost = (body, token) => {
  console.log({ body, token })
  return axios.post(`${api}/posts`, body, {
    headers: { Authorization: token },
  });
};

export const getAboutData = () => {
  return axios.get(`${api}/about`);
};

export const getPrivacyData = () => {
  return axios.get(`${api}/privacy`);
};

export const getTermsData = () => {
  return axios.get(`${api}/terms`);
};


// API to get post
export const wouldBuy = (slug, token) => {
  return axios.post(`${api}/posts/${slug}/wouldBuy`, {}, { headers: { Authorization: token } });
};