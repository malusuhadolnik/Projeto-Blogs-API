const { loginService } = require('../services');

const inspectBodyInfo = (email, password) => email && password; // exemplo da aula do zambs, lecture/backend 6.4

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);

    if (!inspectBodyInfo(email, password)) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    // Será validado que não é possível fazer login com um usuário que não existe
    // Precisamos buscar no DB pelo email ou senha. Então essa função de validação é um service

    const isValid = await loginService.validateUser(email, password);
    if (!isValid) {
        return res.status(400).json({ message: 'Invalid fields' });
    }

    // se as infos do login estiverem ok, criar um token (fazer uma func auxiliar)

    // Será validado que é possível fazer login com sucesso
    res.status(200).json({ token: 'inserirTokenAqui' });
  } catch (err) {
    res.status(500).json({
        message: 'Something is off',
        error: err.message,
      });
  }
};