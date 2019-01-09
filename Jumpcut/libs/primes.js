/**
 * Finding all primes upto 100000. (sieve of eratosthenes)
 */

module.exports = (n = 100000) => {
  let dp = new Array(n);

  for (let k = 0; k < n; k++) {
    dp[k] = k;
  }

  dp[1] = 0;

  for (let p = 2; p*p < n; p++) {
    if (dp[p]) {
      for (let i = p*p; i < n; i += p) {
        dp[i] = 0;
      }
    }
  }

  return dp.filter(x => x);
}
