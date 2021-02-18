import { combineReducers } from '@reduxjs/toolkit';

import authentication from './authentication';
import category from './category';

export default combineReducers({
  ...authentication,
  ...category,
});
