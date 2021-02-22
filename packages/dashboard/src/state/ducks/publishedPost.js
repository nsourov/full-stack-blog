import { createSlice } from '@reduxjs/toolkit';

import { getPublishedPost } from '../../api/api';

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

    getPublishedPostSuccess: (state, { payload }) => {
      return {
        loading: false,
        error: null,
        data: payload,
      };
    },

    getPublishedPostFailure: loadingFailed,
  },
});

export const {
  getPublishedPostStart,
  getPublishedPostSuccess,
  getPublishedPostFailure,
} = publishedPostSlice.actions;

export default {
  publishedPost: publishedPostSlice.reducer,
};

export const fatchPublishedPost = (page, role, id) => async (dispatch) => {
  try {
    dispatch(getPublishedPostStart());

    const { data } = await getPublishedPost(page, role, id);

    dispatch(getPublishedPostSuccess(data));
  } catch (error) {
    dispatch(getPublishedPostFailure(error.toString()));
  }
};
