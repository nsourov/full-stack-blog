import { createSlice } from '@reduxjs/toolkit';

import { getPublishedPost } from 'src/api';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.loading = false;
  state.error = payload;
}

const blogsSlice = createSlice({
  name: 'blogLanding',
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

export const {
  getBlogsStart,
  getBlogsSuccess,
  getBlogsFailure,
} = blogsSlice.actions;

export default {
  blogs: blogsSlice.reducer,
};

export const fatchBlogs = (page) => async (dispatch) => {
  try {
    dispatch(getBlogsStart());

    const { data } = await getPublishedPost(page);

    dispatch(getBlogsSuccess(data));
  } catch (error) {
    dispatch(getBlogsFailure(error.toString()));
  }
};
