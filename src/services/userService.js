const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) =>
  User.create({ displayName, email, password, image });

const getAllUsers = () => User.findAll();

const getUserById = (id) => User.findByPk(id);

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
};