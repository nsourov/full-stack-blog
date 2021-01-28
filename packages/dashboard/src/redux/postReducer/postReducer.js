import { createSlice } from '@reduxjs/toolkit';
import UserAxios from '../Axios/UserAxios';
const postSlice = createSlice({
  name: 'post',
  initialState: {
    isLoading: true,
    posts: [],
    pages: 0,
  },

  reducers: {
    setLoading(state, { payload }) {
      state.isLoading = payload ? true : false;
    },
    setPosts(state, { payload }) {
      state.posts = payload;
    },
    setPages(state, { payload }) {
      state.pages = payload;
    },
  },
});

const { setLoading, setPosts, setPages } = postSlice.actions;

export const getPosts = (data) => async dispatch => {
  try {
    dispatch(setLoading(true));
    let result = await UserAxios.get(`/posts/${data.postStatus}/page/${data.page ? data.page : "1"}`);
    dispatch(setPages(result.data.pages));
    dispatch(setPosts(result.data.posts));
    dispatch(setLoading(false));
  } catch (err) {
    console.log(err.response.data);
    dispatch(setLoading(false));
  }
};

export default postSlice.reducer;
