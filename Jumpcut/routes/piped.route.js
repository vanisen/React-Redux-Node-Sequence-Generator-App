const express           = require('express');
const router            = express.Router();
const pipedController   = require('../controllers/piped.controller');

router.post('/piped/:sequencer/:pipe', (req, res, next) => {
  pipedController.init(req, res, next);
});

router.get('/piped/next', (req, res, next) => {
  pipedController.next(req, res, next);
});

module.exports = router;
