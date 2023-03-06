const { User } = require('../models');

const validateUser = async (email, password) => {
    const targetUser = await User.findOne({ where: { email, password } });
    return targetUser;
};

module.exports = {
    validateUser,
};

// https://sequelize.org/docs/v6/core-concepts/model-querying-finders/