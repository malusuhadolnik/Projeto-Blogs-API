const express = require('express');
const { userController } = require('../controllers');
const { validateName } = require('../middlewares/validateName');
const { validatePassword } = require('../middlewares/validatePassword');
const { validateEmail } = require('../middlewares/validateEmail');
const { validateToken } = require('../middlewares/validateToken');

const userRouter = express.Router();

userRouter.post('/', validateName, validateEmail, validatePassword, userController.createUser);
userRouter.get('/', validateToken, userController.getAllUsers);
userRouter.get('/:id', validateToken, userController.getUserById);

module.exports = userRouter;
