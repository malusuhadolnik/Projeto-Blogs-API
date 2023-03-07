const express = require('express');
const { userController } = require('../controllers');
const { validateName } = require('../middlewares/validateName');

const userRouter = express.Router();

userRouter.post('/', validateName, userController.createUser);

module.exports = userRouter;
