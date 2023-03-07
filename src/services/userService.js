const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) =>
  User.create({ displayName, email, password, image });

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return allUsers;
};

const getUserById = (id) => User.findByPk(id, {
  attributes: ['id', 'displayName', 'email', 'image'],
});

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
};