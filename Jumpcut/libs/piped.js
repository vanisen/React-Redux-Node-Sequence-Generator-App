/**
 * Driver function to extent mimiced generator.
 */

module.exports = (sequencer, ...parameters) => {
  let gen = sequencer.apply(this, parameters);
  let pipeline;

  return {
    pipeline: function(pipe) {
      if (typeof pipe !== 'function') {
        throw new Error('Pipe must be a function');
      } else {
        pipeline = pipe();
        return this;
      }
    },
    invoke: function() {
      return {
        next: function() {
          let value = gen.next().value;
          if (value) {
            return { value: pipeline(value), done: false };
          } else {
            return { value: undefined, done: true };
          }
        }
      };
    }
  }
}
