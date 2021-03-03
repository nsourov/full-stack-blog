const express = require('express');
const passport = require('passport');

const router = express.Router();

// Import controllers
const notificationController = require('../controllers/notification');
const { isAdmin } = require('../middlewares');

// notification Routes
router.get(
  '/page/:page',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  notificationController.getNotifications
);

router.delete(
  '/:slug',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  notificationController.deleteNotifications
);

router.put(
  '/read/:notificationId',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  notificationController.markAsRead
);

// Export Router
module.exports = router;
