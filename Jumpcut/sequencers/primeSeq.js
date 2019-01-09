const primes = require('../libs/primes');

module.exports = () => {
  let list = primes();
  let x = 0;

  return {
    next: function() {
      if (list[x]) {
        return { value: list[x++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}
