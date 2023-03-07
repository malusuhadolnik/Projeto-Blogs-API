const { userService } = require('../services');
const { createToken } = require('../middlewares/createToken');
require('dotenv/config');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const newUser = userService.createUser({ displayName, email, password, image });

    if (!newUser) throw Error;
    // Será validado que é possível cadastrar com sucesso
    const token = createToken(email);
    return res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({
        message: 'Something is off',
        error: err.message,
      });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await userService.getAllUsers();
    console.log(users);
    if (!users) throw Error;
    
    return res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
        message: 'Something is off',
        error: err.message,
      });
  }
};

module.exports = {
    createUser,
    getAllUsers,
};