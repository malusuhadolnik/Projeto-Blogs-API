const { loginService } = require('../services');

const regex = /\S+@\S+\.\S+/;

const validateEmail = async (req, res, next) => {
    const { email, password } = req.body; 
    const isFormatValid = regex.test(email);
    const userEmail = await loginService.validateUser(email, password);
    console.log(userEmail); 

    if (!isFormatValid) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }

    if (userEmail) {
        return res.status(409).json({ message: 'User already registered' });
      }
    return next();
};

module.exports = {
    validateEmail,
};