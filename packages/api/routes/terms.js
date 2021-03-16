const express = require('express');
const passport = require('passport');

const router = express.Router();

// Import controllers
const termsController = require('../controllers/terms');
const { isAdmin } = require('../middlewares');

// Category Routes
router.get('/', termsController.getTerms);

router.put(
  '/',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  termsController.updateTerms
);

// Export Router
module.exports = router;
