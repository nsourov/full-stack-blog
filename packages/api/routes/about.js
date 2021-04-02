const express = require('express');
const passport = require('passport');

const router = express.Router();

// Import controllers
const aboutController = require('../controllers/about');
const { isAdmin } = require('../middlewares');

// Category Routes
router.get('/', aboutController.getAbout);

router.put(
  '/',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  aboutController.updateAbout
);

// Export Router
module.exports = router;
