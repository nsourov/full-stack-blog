import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    data: {},
    admin: {},
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
    setAdmin: (state, { payload }) => {
      state.admin = payload;
    },
    logOutUser: () => {
      localStorage.removeItem('jwtToken');
      return { isAuthenticated: false, data: {} };
    },
  },
});

export const { setCurrentUser, setAdmin, logOutUser } = authSlice.actions;

export default {
  user: authSlice.reducer,
};
