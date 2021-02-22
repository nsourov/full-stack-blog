import { createSlice } from '@reduxjs/toolkit';

const infoSlice = createSlice({
  name: 'user',
  initialState: {
    url: process.env.REACT_APP_API_URL,
  },

  reducers: {},
});

export default infoSlice.reducer;
