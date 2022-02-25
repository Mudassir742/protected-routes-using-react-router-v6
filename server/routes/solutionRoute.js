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

router.delete(
  "/deletesolution/:id",
  verifyToken,
  verifyRole(["DEO", "manager"]),
  solutionController.deleteSolution
);

router.get("/showsolutions", verifyToken, solutionController.showSolutions);
router.get("/showsolutions/:id", verifyToken, solutionController.showSolutionbyId);

module.exports = router;
