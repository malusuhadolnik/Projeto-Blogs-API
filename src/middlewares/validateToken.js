const jwt = require('jsonwebtoken');
const { userService } = require('../services');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'MySecretWord';

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token); // retorna undefined
  
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, secret);
    const user = await userService.getUserById(decoded.data.id);
    req.user = user;
    next();
    } catch (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    validateToken,
};

// resolução inspirada no tutorial do Course