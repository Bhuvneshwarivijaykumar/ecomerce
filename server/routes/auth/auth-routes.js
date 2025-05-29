const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  authMiddleware,
} = require("../../controllers/auth/auth-controller");

const router = express.Router();

router.post("/register", registerUser);//when ever I am calling register from the frontend I am caling this controoler in the backend
router.post("/login", loginUser);// this indicates the method in the backend code part 
router.post("/logout", logoutUser);// this route linke to the specific controllers 
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});

module.exports = router;