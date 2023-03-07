const { userService } = require('../services');
const { createToken } = require('../middlewares/createToken');
require('dotenv/config');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const newUser = userService.createUser({ displayName, email, password, image });
    console.log(newUser);

    if (!newUser) throw Error;
    // Será validado que é possível cadastrar com sucesso
    const token = createToken(email);
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({
        message: 'Something is off',
        error: err.message,
      });
  }
};

module.exports = {
    createUser,
};