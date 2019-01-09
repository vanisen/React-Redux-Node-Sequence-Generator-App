const piped                     = require('../libs/piped');
const { sequencerMap, pipeMap } = require('../libs/initialize');

module.exports = (sequencer, pipe, parameters) => {
  return piped(sequencerMap[sequencer], ...parameters)
          .pipeline(pipeMap[pipe])
          .invoke();
}
