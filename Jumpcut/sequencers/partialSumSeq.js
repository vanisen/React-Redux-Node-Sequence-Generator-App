module.exports = (...seq) => {
  let x = 0;
  let sum = 0;
  let count = seq.length;

  return {
    next: function() {
      if (x < count) {
        sum += seq[x++];
        return { value: sum, done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}
