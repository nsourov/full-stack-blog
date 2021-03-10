const express = require('express');
const passport = require('passport');

const router = express.Router();

// Import controllers
const postController = require('../controllers/post');
const {
  isAdmin,
  checkRole,
  checkPostPermission,
  checkCommentPermission,
  checkEditorPosts,
} = require('../middlewares');

// Post Routes
router.get('/published/page/:page', postController.getPublishedPosts);
router.get('/published/category/:slug/page/:page', postController.getPublishedCategoryPosts);
router.get(
  '/:userId/published/page/:page',
  postController.getUserPublishedPosts
);

router.get('/search/:searchString/page/:page', postController.getSearchPosts);

router.get(
  '/unpublished/guest/page/:page',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  postController.getUnPublishedGuestsPosts
);

router.get(
  '/published/guest/page/:page',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  postController.getPublishedGuestsPosts
);
router.get(
  '/unpublished/page/:page',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  postController.getUnPublishedPosts
);
router.get(
  '/:userId/unpublished/page/:page',
  passport.authenticate('jwt', { session: false }),
  checkEditorPosts,
  postController.getUserUnPublishedPosts
);

router.get('/:slug', postController.getPost);
router.get(
  '/:postId/comments/published/page/:page',
  postController.getPostPublishedComments
);
router.get(
  '/:postId/comments/unpublished/page/:page',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  postController.getPostUnPublishedComments
);
router.get(
  '/:userId/:postId/comments/unpublished/page/:page',
  passport.authenticate('jwt', { session: false }),
  checkEditorPosts,
  postController.getPostUnPublishedComments
);
router.delete(
  '/:slug',
  passport.authenticate('jwt', { session: false }),
  checkPostPermission,
  postController.deletePost
);
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  postController.upload,
  postController.resize,
  postController.createPost
);
router.post(
  '/create-publish',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  postController.upload,
  postController.resize,
  postController.createAndPublishPost
);

router.put(
  '/:slug',
  passport.authenticate('jwt', { session: false }),
  checkPostPermission,
  postController.upload,
  postController.resize,
  postController.updatePost
);

router.put(
  '/:slug/publish',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  postController.publishPost
);
router.post(
  '/:slug/like',
  passport.authenticate('jwt', { session: false }),
  postController.likePost
);
router.post(
  '/:slug/comment',
  passport.authenticate('jwt', { session: false }),
  postController.addComment
);
router.delete(
  '/:slug/comment/:commentId',
  passport.authenticate('jwt', { session: false }),
  checkCommentPermission,
  postController.deleteComment
);
router.put(
  '/:slug/comment/:commentId',
  passport.authenticate('jwt', { session: false }),
  checkCommentPermission,
  postController.updateComment
);
// Export Router
module.exports = router;
