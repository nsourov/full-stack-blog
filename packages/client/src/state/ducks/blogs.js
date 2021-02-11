import { createSlice } from '@reduxjs/toolkit';

import { getPublishedPosts, getPost, getPostComments } from '../../api';

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

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    getCommentsStart: startLoading,

    getCommentsSuccess: (state, { payload }) => {
      return {
        loading: false,
        error: null,
        data: payload,
      };
    },

    getCommentsFailure: loadingFailed,
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

export const {
  getCommentsStart,
  getCommentsSuccess,
  getCommentsFailure,
} = commentsSlice.actions;

export default {
  blogs: blogsSlice.reducer,
  blog: blogSlice.reducer,
  comments: commentsSlice.reducer,
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

export const fatchComments = (id, page) => async (dispatch) => {
  try {
    dispatch(getCommentsStart());

    const { data } = await getPostComments(id, page);

    dispatch(getCommentsSuccess(data));
  } catch (error) {
    dispatch(getCommentsFailure(error.toString()));
  }
};
