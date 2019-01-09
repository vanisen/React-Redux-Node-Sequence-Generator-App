/**
 * Driver function to mimic JavaScript build-in generators.
 */

module.exports = (sequencer, ...parameters) => {
  return sequencer.apply(this, parameters);
}
