const router = require("express").Router();

const chapterController = require("../controllers/chapterController");
const verifyToken = require("../middleware/authMiddleware");
const { verifyRole } = require("../middleware/restrictToMiddleware");

router.post("/addchapter",verifyToken,verifyRole(["DEO"]),chapterController.addNewChapter)

router.delete("/deletechapter/:id",verifyToken,verifyRole(["DEO"]),chapterController.deleteChapter)
module.exports = router