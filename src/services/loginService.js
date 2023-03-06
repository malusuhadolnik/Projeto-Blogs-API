const { User } = require('../models');

const validateUser = async (email, password) => {
    console.log(email); // pega corretamente 
    console.log(password); // pega corretamente
    const targetUser = await User.findOne({ where: { email, password } });// Executing default
    console.log(targetUser);
    return targetUser;
};

module.exports = {
    validateUser,
};

// https://sequelize.org/docs/v6/core-concepts/model-querying-finders/