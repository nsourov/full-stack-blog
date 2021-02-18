import { combineReducers } from '@reduxjs/toolkit';

import authentication from './authentication';

export default combineReducers({
  ...authentication,
});
