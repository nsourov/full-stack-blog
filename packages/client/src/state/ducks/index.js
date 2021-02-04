import { combineReducers } from '@reduxjs/toolkit';

import blogs from './blogs';
import postCategories from './postCategories';
import postComment from './postComment';

import ui from './ui';

export default combineReducers({
  ...blogs,
  ...postCategories,
  ...postComment,
  ...ui,
});
