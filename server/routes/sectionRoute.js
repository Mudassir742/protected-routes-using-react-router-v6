const router = require("express").Router();

const sectionController = require("../controllers/sectionController");
const verifyToken = require("../middleware/authMiddleware");
const { verifyRole } = require("../middleware/restrictToMiddleware");

router.post(
  "/addsection",
  verifyToken,
  verifyRole(["DEO", "manager"]),
  sectionController.addNewSection
);

router.delete(
  "/deletesection/:id",
  verifyToken,
  verifyRole(["DEO", "manager"]),
  sectionController.deleteSection
);

module.exports = router;
