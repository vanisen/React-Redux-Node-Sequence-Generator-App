const primeSeq      = require('../sequencers/primeSeq');
const rangeSeq      = require('../sequencers/rangeSeq');
const factorialSeq  = require('../sequencers/factorialSeq');
const fibonacciSeq  = require('../sequencers/fibonacciSeq');
const partialSumSeq = require('../sequencers/partialSumSeq');
const accumulator   = require('../pipe/accumulator');
const isEven        = require('../pipe/isEven');

// sequencers map
const sequencerMap = {
  "primeSeq": primeSeq, 
  "rangeSeq": rangeSeq, 
  "factorialSeq": factorialSeq, 
  "fibonacciSeq": fibonacciSeq, 
  "partialSumSeq": partialSumSeq
};

// pipes map
const pipeMap = {
  "isEven": isEven,
  "accumulator": accumulator
}

module.exports = {
  pipeMap,
  sequencerMap
}
