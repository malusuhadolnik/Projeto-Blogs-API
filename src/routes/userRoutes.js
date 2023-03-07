const express = require('express');
const { userController } = require('../controllers');
const { validateName } = require('../middlewares/validateName');
const { validatePassword } = require('../middlewares/validatePassword');

const userRouter = express.Router();

userRouter.post('/', validateName, validatePassword, userController.createUser);

module.exports = userRouter;
