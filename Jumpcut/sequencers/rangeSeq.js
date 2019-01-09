module.exports = (start = 1, step = 2) => {
  let seq;

  return {
    next: function() {
      if (seq == undefined) {
        seq = start;
      } else {
        seq += step;
      }
      return { value: seq, done: false };
    }
  };
}
