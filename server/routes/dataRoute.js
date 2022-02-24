const router = require("express").Router();

const dataController = require("../controllers/dataController");
const verifyToken = require("../middleware/authMiddleware");
const { checkRole } = require("../middleware/restrictToMiddleware");

router.get(
  "/getdata",
  verifyToken,
  checkRole(["manager"]),
  dataController.getData
);

module.exports = router;
