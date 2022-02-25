const router = require("express").Router();

const solutionController = require("../controllers/solutionController");
const verifyToken = require("../middleware/authMiddleware");
const { verifyRole } = require("../middleware/restrictToMiddleware");

router.post(
  "/addsolution",
  verifyToken,
  verifyRole(["DEO", "manager"]),
  solutionController.addNewSolution
);

// router.delete(
//   "/deletesection/:id",
//   verifyToken,
//   verifyRole(["DEO", "manager"]),
//   sectionController.deleteSection
// );

// router.get("/showsections", verifyToken, sectionController.showSections);
// router.get("/showsections/:id", verifyToken, sectionController.showSectionbyId);

module.exports = router;
