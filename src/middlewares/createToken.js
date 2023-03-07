const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'MySecretWord';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '1440min',
};

const createToken = (data) => jwt.sign({ data }, secret, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { 
  createToken, 
  verifyToken,
};

// código adaptado da aula do zambs (lecture/backend 6.4)