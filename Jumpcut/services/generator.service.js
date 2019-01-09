const generator         = require('../libs/generator');
const { sequencerMap }  = require('../libs/initialize');

module.exports = (sequencer, parameters) => {
  return generator(sequencerMap[sequencer], ...parameters);
}
