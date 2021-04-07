const express = require('express');
const passport = require('passport');

const router = express.Router();

// Import controllers
const disclaimerController = require('../controllers/disclaimer');
const { isAdmin } = require('../middlewares');

// Category Routes
router.get('/', disclaimerController.getDisclaimer);

router.put(
  '/',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  disclaimerController.updateDisclaimer
);

// Export Router
module.exports = router;
