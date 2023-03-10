const express = require('express');
const { postController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

const postRouter = express.Router();

postRouter.get('/', validateToken, postController.getAllPosts);

module.exports = postRouter;