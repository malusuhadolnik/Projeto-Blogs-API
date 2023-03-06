const { loginService } = require('../services');
const { createToken } = require('../middlewares/createToken');
require('dotenv/config');

const inspectBodyInfo = (email, password) => email && password; // exemplo da aula do zambs, lecture/backend 6.4

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!inspectBodyInfo(email, password)) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    // Será validado que não é possível fazer login com um usuário que não existe
    const user = await loginService.validateUser(email, password);
    if (!user) {
        return res.status(400).json({ message: 'Invalid fields' });
    }

    const { password: _, ...userWithoutPassword } = user.dataValues;
    const token = createToken(userWithoutPassword);

    // Será validado que é possível fazer login com sucesso
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({
        message: 'Something is off',
        error: err.message,
      });
  }
};