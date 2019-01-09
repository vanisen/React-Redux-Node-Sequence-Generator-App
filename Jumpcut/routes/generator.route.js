const express         = require('express');
const router          = express.Router();
const generatorController  = require('../controllers/generator.controller');

router.post('/generator/:sequencer', (req, res, next) => {
  generatorController.init(req, res, next);
});

router.get('/generator/next', (req, res, next) => {
  generatorController.next(req, res, next);
});

module.exports = router;
