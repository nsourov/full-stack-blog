import { createSlice } from '@reduxjs/toolkit';

import { getPublishedPost, getPublishedGuestPost } from '../../api';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.loading = false;
  state.error = payload;
}

const publishedPostSlice = createSlice({
  name: 'categories',
  initialState: {
    loading: true,
    error: null,
    data: [],
  },
  reducers: {
    getPublishedPostStart: startLoading,
    getPublishedGuestPostStart: startLoading,

    getPublishedPostSuccess: (state, { payload }) => {
      return {
        loading: false,
        error: null,
        data: payload,
      };
    },

    getPublishedGuestPostSuccess: (state, { payload }) => {
      return {
        loading: false,
        error: null,
        data: payload,
      };
    },

    getPublishedPostFailure: loadingFailed,
    getPublishedGuestPostFailure: loadingFailed,
  },
});

export const {
  getPublishedPostStart,
  getPublishedPostSuccess,
  getPublishedPostFailure,
  getPublishedGuestPostStart,
  getPublishedGuestPostSuccess,
  getPublishedGuestPostFailure,
} = publishedPostSlice.actions;

export default {
  publishedPost: publishedPostSlice.reducer,
};

export const fetchPublishedPost = (page, role, id) => async (dispatch) => {
  try {
    dispatch(getPublishedPostStart());

    const { data } = await getPublishedPost(page, role, id);

    dispatch(getPublishedPostSuccess(data));
  } catch (error) {
    dispatch(getPublishedPostFailure(error.toString()));
  }
};

export const fetchPublishedGuestPost = (page, role, token) => async (dispatch) => {
  try {
    dispatch(getPublishedGuestPostStart());

    const { data } = await getPublishedGuestPost(page, role, token);

    dispatch(getPublishedGuestPostSuccess(data));
  } catch (error) {
    dispatch(getPublishedGuestPostFailure(error.toString()));
  }
};
