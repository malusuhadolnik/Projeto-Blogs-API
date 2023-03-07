const jwt = require('jsonwebtoken');
const { userService } = require('../services');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'MySecretWord';

const validateToken = async (req, res, next) => {
  console.log(req.header); // retorna [Function: header]
  const token = req.header('Authorization');
  console.log(token); // retorna undefined
  
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded);
    const user = await userService.getUserById(decoded.data.id);
    req.user = user;
    
    next();
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