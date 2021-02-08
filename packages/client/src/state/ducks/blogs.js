import { createSlice } from '@reduxjs/toolkit';

import { getPublishedPosts, getPost } from '../../api';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.loading = false;
  state.error = payload;
}

const blogsSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    getBlogsStart: startLoading,

    getBlogsSuccess: (state, { payload }) => {
      return {
        loading: false,
        error: null,
        data: payload,
      };
    },

    getBlogsFailure: loadingFailed,
  },
});

const blogSlice = createSlice({
  name: 'post',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    getBlogStart: startLoading,

    getBlogSuccess: (state, { payload }) => {
      return {
        loading: false,
        error: null,
        data: payload,
      };
    },

    getBlogFailure: loadingFailed,
  },
});

export const {
  getBlogsStart,
  getBlogsSuccess,
  getBlogsFailure,
} = blogsSlice.actions;

export const {
  getBlogStart,
  getBlogSuccess,
  getBlogFailure,
} = blogSlice.actions;

export default {
  blogs: blogsSlice.reducer,
  blog: blogSlice.reducer,
};

export const fatchBlogs = (page) => async (dispatch) => {
  try {
    dispatch(getBlogsStart());

    const { data } = await getPublishedPosts(page);

    dispatch(getBlogsSuccess(data));
  } catch (error) {
    dispatch(getBlogsFailure(error.toString()));
  }
};

export const fatchBlog = (slug) => async (dispatch) => {
  try {
    dispatch(getBlogStart());

    const { data } = await getPost(slug);

    dispatch(getBlogSuccess(data));
  } catch (error) {
    dispatch(getBlogFailure(error.toString()));
  }
};
