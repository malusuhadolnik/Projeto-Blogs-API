const validatePassword = (req, res, next) => {
    const { password } = req.body; 
    const theLength = password.length; 
    
    if (!password || theLength < 6) {
      return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
    }
    return next();
};

module.exports = {
    validatePassword,
};