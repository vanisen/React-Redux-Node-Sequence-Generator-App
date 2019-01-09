module.exports = () => {
  let a = 0;
  let b = 1;
  let c = 0;

  return {
    next: function() {
      if (!c) {
        c = a + b;
      } else {
        c = a + b;
        a = b;
        b = c;
      }
      return { value: c, done: false };
    }
  };
}
