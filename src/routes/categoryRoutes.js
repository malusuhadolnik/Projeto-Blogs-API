const express = require('express');
const { categoriesController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

const categoryRouter = express.Router();

categoryRouter.post('/', validateToken, categoriesController.createCategory);
categoryRouter.get('/', validateToken, categoriesController.getAllCategories);

module.exports = categoryRouter;