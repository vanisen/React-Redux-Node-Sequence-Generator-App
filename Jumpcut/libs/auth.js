const jwt     = require('express-jwt');
const config  = require('../config.json');

/**
 * Authenticing all routes except '/api/authenticate'.
 */

module.exports = () => {
  const { secret } = config;
  return jwt({ secret }).unless({
    path: [
      '/api/authenticate'
    ]
  });
};
