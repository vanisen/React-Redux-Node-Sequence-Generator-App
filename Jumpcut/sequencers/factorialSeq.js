module.exports = () => {
  let fact = 1;
  let x = 0;

  return {
    next: function() {
      if (x) {
        fact *= x;
      }
      x++;
      return { value: fact, done: false };
    }
  };
}
