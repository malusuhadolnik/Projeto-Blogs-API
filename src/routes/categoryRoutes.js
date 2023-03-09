const express = require('express');
const { categoriesController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

const categoryRouter = express.Router();

categoryRouter.post('/', validateToken, categoriesController.createCategory);

module.exports = categoryRouter;