const express = require('express');
const passport = require('passport');

const router = express.Router();

// Import controllers
const userController = require('../controllers/user');
const { isAdmin, checkOwnProfile } = require('../middlewares');

// User Routes
router.get('/admin-info', userController.getAdmin);

router.get(
  '/page/:page',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  userController.getUsers
);

router.get(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  userController.getUser
);


router.get(
  '/:userId/posts/published/page/:page',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  userController.getUsersPublishedPosts
);
router.get(
  '/:userId/posts/unpublished/page/:page',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  userController.getUsersUnPublishedPosts
);

router.get(
  '/:userId/post/:postId/comments/published/page/:page',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  userController.getUsersPublishedComments
);

router.get(
  '/:userId/post/:postId/comments/unpublished/page/:page',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  userController.getUsersUnPublishedComments
);

router.delete(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  userController.deleteUser
);

router.put(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  userController.updateUser
);

router.put(
  '/profile/:userId',
  passport.authenticate('jwt', { session: false }),
  checkOwnProfile,
  userController.updateProfile
);

// Export Router
module.exports = router;
