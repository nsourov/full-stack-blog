import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    data: {},
  },
  reducers: {
    setCurrentUser: (state, { payload: { token } }) => {
      if (typeof token !== 'object' && typeof token !== 'undefined') {
        const decoded = jwtDecode(token);
        localStorage.setItem('jwtToken', token);
        return {
          isAuthenticated: true,
          data: decoded,
        };
      } else {
        return { isAuthenticated: false, data: {} };
      }
    },
  },
});

export const { setCurrentUser } = authSlice.actions;

export default {
  user: authSlice.reducer,
};
