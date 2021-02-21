import { createSlice } from '@reduxjs/toolkit';

import { getCategories } from '../../api/api'

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.loading = false;
  state.error = payload;
}

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    loading: true,
    error: null,
    data: [],
  },
  reducers: {
    getCategoryStart: startLoading,

    getCategorySuccess: (state, { payload }) => {
      return {
        loading: false,
        error: null,
        data: payload,
      };
    },

    getCategoryFailure: loadingFailed,
  },
});

export const {
  getCategoryStart,
  getCategorySuccess,
  getCategoryFailure,
} = categorySlice.actions;

export default {
  categories: categorySlice.reducer,
};

export const fatchCategories = () => async (dispatch) => {
  try {
    dispatch(getCategoryStart());

    const { data } = await getCategories();

    dispatch(getCategorySuccess(data));
  } catch (error) {
    dispatch(getCategoryFailure(error.toString()));
  }
};