const cache         = require('memory-cache');
const config        = require('../config.json');
const pipedService  = require('../services/piped.service');

module.exports = {
  init: async (req, res, next) => {
    if (config.sequencers.includes(req.params['sequencer']) && config.pipes.includes(req.params['pipe'])) {
      let pipedSeqGen = pipedService(req.params['sequencer'], req.params['pipe'], req.body['params'] || []);
      cache.put(req.user['uuid'], pipedSeqGen);
      res.status(201).json({ message: 'Pipeed sequencer initialized.' });
    } else {
      res.status(400).json({ message: 'Invalid sequencer or pipe!' });
    }
  },
  next: async (req, res, next) => {
    let pipedSeqGen = cache.get(req.user['uuid']);
    if (pipedSeqGen) {
      res.status(200).json(pipedSeqGen.next());
    } else {
      res.status(400).json({ message: 'Invalid sequencer or pipe!' });
    }
  }
}
