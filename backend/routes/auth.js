const {
  signup,
  login,
  profile,
  updateProfile,
} = require("../controllers/AuthController");

const {
  signupValidation,
  loginValidation,
} = require("../middleware/AuthValidation");

const authMiddleware = require("../middleware/AuthMiddleware");

const router = require("express").Router();

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

router.get("/profile", authMiddleware, profile);
router.put("/profile", authMiddleware, updateProfile);

module.exports = router;
