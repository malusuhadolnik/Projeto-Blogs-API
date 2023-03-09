const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);

    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }

    const newCategory = await categoriesService.createCategory({ name });
    console.log(newCategory);

    return res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({
        message: 'Something is off',
        error: err.message,
      });
  }
};

module.exports = {
  createCategory,
};