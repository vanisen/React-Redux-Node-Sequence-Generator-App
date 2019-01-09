const express         = require('express');
const router          = express.Router();
const authController  = require('../controllers/auth.controller');

router.post('/authenticate', (req, res, next) => {
  authController(req, res, next);
});

module.exports = router;
