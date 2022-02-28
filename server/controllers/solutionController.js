const Solutions = require("../models/solutionModel");

exports.addNewSolution = async (req, res) => {
  try {
    const { bookId, chapterId, sectionId, questionNumber, questionDetail } =
      req.body;

    if (
      !bookId ||
      !chapterId ||
      !sectionId ||
      !questionNumber ||
      !questionDetail
    ) {
      return res
        .status(422)
        .json({ error: "input fields are empty", data: null });
    }

    const newSolution = await Solutions.create({
      bookId,
      chapterId,
      sectionId,
      questionNumber,
      questionDetail,
    });

    console.log(newSolution);

    if (!newSolution) {
      return res
        .status(422)
        .json({ error: "solution not created", data: null });
    }

    return res.status(201).json({ error: null, data: newSolution });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while creating solution",
      data: null,
    });
  }
};

exports.deleteSolution = async (req, res) => {
  try {
    const solutionId = req.params.id;

    if (!solutionId) {
      return res
        .status(422)
        .json({ error: "solution id not given", data: null });
    }

    const isSolutionDeleted = await Solutions.deleteOne({ _id: solutionId });

    console.log(isSolutionDeleted.deletedCount);

    if (!isSolutionDeleted.deletedCount) {
      return res
        .status(422)
        .json({ error: "error while deleting solution", data: null });
    }

    return res.status(201).json({ error: null, data: isSolutionDeleted });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while deleting solution",
      data: null,
    });
  }
};

exports.showSolutions = async (req, res) => {
  try {
    const solutions = await Solutions.find({});

    console.log(solutions);

    if (solutions.length === 0) {
      return res.status(422).json({
        error: "no solutions available",
        data: null,
      });
    }

    return res.status(201).json({
      error: null,
      data: solutions,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while getting solutions",
      data: null,
    });
  }
};

exports.showSolutionbyId = async (req, res) => {
  try {
    const solutionId = req.params.id;

    if (!solutionId) {
      return res
        .status(422)
        .json({ error: "solution id not given", data: null });
    }

    const solution = await Solutions.findOne({ _id: solutionId });

    console.log(solution);

    if (!solution) {
      return res.status(422).json({
        error: "no solutions available",
        data: null,
      });
    }

    return res.status(201).json({
      error: null,
      data: solution,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while getting solution",
      data: null,
    });
  }
};
// exports.updateBookstatus = async (req, res) => {};
