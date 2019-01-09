module.exports = (err, req, res, next) => {
  /**
   * Error logging to stdout
   */
  console.error(err);

  if (err.status === 404) {
    return res.status(404).json({ message: 'Not Found!' });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ message: 'Invalid Token!' });
  }

  return res.status(500).json({ message: 'Internal Server Error!' });
};
