const { verifyToken } = require('./createToken');

const validateToken = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        console.log(authorization);

        if (!authorization) {
          return res.status(401).json({ message: 'Token not found' });
        }

        const payload = verifyToken(authorization);
        console.log(payload);
        req.data = payload.data;
        return next();
      } catch (err) {
        res.status(500).json({
            message: 'Something is off',
            error: err.message,
          });
      }
};

module.exports = {
    validateToken,
};

// resolução inspirada na aula do zambs (lecture/backend 6.4)