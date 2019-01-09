const jwt     = require('jsonwebtoken');
const config  = require('../config.json');
const uuid    = require('uuid/v4');

// users hardcoded for simplicity, store in a db for production applications
const users = config.users

module.exports = async ({ username, password }) => {
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ sub: user.id, uuid: uuid() }, config.secret);
    const { password, ...userWithoutPassword } = user;
    return {
      ...userWithoutPassword,
      token
    };
  }
}
