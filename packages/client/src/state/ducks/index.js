import { combineReducers } from '@reduxjs/toolkit';

import blogs from './blogs';
import postCategories from './postCategories';
import authentication from './authentication';

export default combineReducers({
  ...blogs,
  ...postCategories,
  ...authentication,
});
