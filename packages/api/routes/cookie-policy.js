const express = require('express');
const passport = require('passport');

const router = express.Router();

// Import controllers
const cookiePolicyController = require('../controllers/cookie-policy');
const { isAdmin } = require('../middlewares');

// Category Routes
router.get('/', cookiePolicyController.getCookiePolicy);

router.put(
  '/',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  cookiePolicyController.updateCookiePolicy
);

// Export Router
module.exports = router;
