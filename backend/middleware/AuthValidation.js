const signupValidation = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || name.length < 3 || name.length > 100) {
    return res.status(400).json({
      message: "Name must be between 3 and 100 characters",
    });
  }

  if (!email || !email.includes("@") || email.length < 5) {
    return res.status(400).json({
      message: "Valid email is required",
    });
  }

  if (!password || password.length < 4 || password.length > 100) {
    return res.status(400).json({
      message: "Password must be between 4 and 100 characters",
    });
  }

  next();
};

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({
      message: "Valid email is required",
    });
  }

  if (!password || password.length < 4) {
    return res.status(400).json({
      message: "Password must be at least 4 characters",
    });
  }

  next();
};

module.exports = {
  signupValidation,
  loginValidation,
};
