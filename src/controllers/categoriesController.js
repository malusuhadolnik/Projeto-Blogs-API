const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }

    const newCategory = await categoriesService.createCategory({ name });

    return res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({
        message: 'Something is off',
        error: err.message,
      });
  }
};

const getAllCategories = async (_req, res) => {
  try {
  const allCategories = await categoriesService.getAllCategories();
  console.log(allCategories);

  if (!allCategories) throw Error;

  return res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json({
      message: 'Something is off',
      error: err.message,
    });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};