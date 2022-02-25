const router = require("express").Router();

const chapterController = require("../controllers/chapterController");
const verifyToken = require("../middleware/authMiddleware");
const { verifyRole } = require("../middleware/restrictToMiddleware");

router.post(
  "/addchapter",
  verifyToken,
  verifyRole(["DEO"]),
  chapterController.addNewChapter
);
router.delete(
  "/deletechapter/:id",
  verifyToken,
  verifyRole(["DEO"]),
  chapterController.deleteChapter
);
router.get("/showchapters",verifyToken,chapterController.showChapters)
router.get("/showchapters/:id",verifyToken,chapterController.showChapters)
module.exports = router;
