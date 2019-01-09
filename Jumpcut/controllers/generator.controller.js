const cache             = require('memory-cache');
const config            = require('../config.json');
const generatorService  = require('../services/generator.service');

module.exports = {
  init: async (req, res, next) => {
    if (config.sequencers.includes(req.params['sequencer'])) {
      let sequenceGen = generatorService(req.params['sequencer'], req.body['params'] || []);
      cache.put(req.user['uuid'], sequenceGen);
      res.status(201).json({ message: 'Sequencer initialized.' });
    } else {
      res.status(400).json({ message: 'Invalid sequencer!' });
    }
  },
  next: async (req, res, next) => {
    let sequenceGen = cache.get(req.user['uuid']);
    if (sequenceGen) {
      res.status(200).json(sequenceGen.next());
    } else {
      res.status(400).json({ message: 'Invalid sequencer!' });
    }
  }
}
