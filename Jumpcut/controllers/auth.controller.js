const authService = require('../services/auth.service');

module.exports = async (req, res, next) => {
  authService(req.body)
    .then(user => user ? res.status(200).json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
}
