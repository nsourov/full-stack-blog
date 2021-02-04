import { combineReducers } from '@reduxjs/toolkit';

import blogLanding from './blogLanding';
import postCategories from './postCategories';
import postComment from './postComment';

import ui from './ui';

export default combineReducers({
  ...blogLanding,
  ...postCategories,
  ...postComment,
  ...ui,
});
