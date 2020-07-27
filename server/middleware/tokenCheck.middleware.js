const jwt = require('jsonwebtoken');

exports.checkToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) throw new Error('You are not authorized 🔐');
    const tokenSplited = token.split(' ')[1];
    jwt.verify(tokenSplited, process.env.SECRET, (err, user) => {
      if (err) {
        throw new Error('You are not authorized 🔐');
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(403).json({
      status: 'error',
      message: error.message,
    });
  }
};
