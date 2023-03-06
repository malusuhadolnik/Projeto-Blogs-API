const { User } = require('../models');

const validateUserLogin = async ( email, password ) => {
    const targetUser = await User.findOne({ where: { email, password }});
    return targetUser;
};

module.exports = {
    validateUserLogin,
};

//https://sequelize.org/docs/v6/core-concepts/model-querying-finders/