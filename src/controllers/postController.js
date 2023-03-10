const { postService } = require('../services');

const getAllPosts = async (_req, res) => {
  try {
    const allPosts = await postService.getAllPosts();
    console.log(allPosts);
    if (!allPosts) throw Error;
    return res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json({
        message: 'Something is off',
        error: err.message,
      });
  }
};

module.exports = {
  getAllPosts,
};