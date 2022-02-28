const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const verifyToken = require("../middleware/authMiddleware");
const { verifyRole } = require("../middleware/restrictToMiddleware");

router.post("/login", userController.userLogin);
router.post(
  "/addnewuser",
  verifyToken,
  verifyRole(["admin"]),
  userController.addNewUser
);

module.exports = router;
