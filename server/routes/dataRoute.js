const router = require("express").Router();

const dataController = require("../controllers/dataController");
const verifyToken = require("../middleware/authMiddleware");
const { verifyRole } = require("../middleware/restrictToMiddleware");

router.get(
  "/getdata",
  verifyToken,
  verifyRole(["manager"]),
  dataController.getData
);

module.exports = router;
