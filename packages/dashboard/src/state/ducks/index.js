import { combineReducers } from '@reduxjs/toolkit';

import authentication from './authentication';
import category from './category';
import publishedPost from './publishedPost';

export default combineReducers({
  ...authentication,
  ...category,
  ...publishedPost,
});
