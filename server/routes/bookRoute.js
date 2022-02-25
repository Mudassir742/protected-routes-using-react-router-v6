const router = require("express").Router();

const bookController = require("../controllers/bookController");
const verifyToken = require("../middleware/authMiddleware");
const { verifyRole } = require("../middleware/restrictToMiddleware");

router.post(
  "/addbook",
  verifyToken,
  verifyRole(["manager"]),
  bookController.addNewBook
);
router.delete(
  "/deletebook/:id",
  verifyToken,
  verifyRole(["manager"]),
  bookController.deleteBook
);

module.exports = router;
