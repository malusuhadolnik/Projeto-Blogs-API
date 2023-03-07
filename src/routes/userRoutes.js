const express = require('express');
const { userController } = require('../controllers');
const { validateName } = require('../middlewares/validateName');
const { validatePassword } = require('../middlewares/validatePassword');
const { validateEmail } = require('../middlewares/validateEmail');

const userRouter = express.Router();

userRouter.post('/', validateName, validateEmail, validatePassword, userController.createUser);

module.exports = userRouter;
