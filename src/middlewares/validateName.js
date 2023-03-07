const validateName = (req, res, next) => {
    const { displayName } = req.body; 
    const theLength = displayName.length; 
    
    if (!displayName || theLength < 8) {
      return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    return next();
};

module.exports = {
    validateName,
};