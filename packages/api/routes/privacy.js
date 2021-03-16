const express = require('express');
const passport = require('passport');

const router = express.Router();

// Import controllers
const privacyController = require('../controllers/privacy');
const { isAdmin } = require('../middlewares');

// Category Routes
router.get('/', privacyController.getPrivacy);

router.put(
  '/',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  privacyController.updatePrivacy
);

// Export Router
module.exports = router;
