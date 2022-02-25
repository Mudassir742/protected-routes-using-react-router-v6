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

// exports.deleteSection = async (req, res) => {
//   try {
//     const sectionId = req.params.id;

//     if (!sectionId) {
//       return res.status(422).json({ error: "book id not given", data: null });
//     }

//     const isSectionDeleted = await Sections.deleteOne({ _id: sectionId });

//     console.log(isSectionDeleted.deletedCount);

//     if (!isSectionDeleted.deletedCount) {
//       return res
//         .status(422)
//         .json({ error: "error while deleting section", data: null });
//     }

//     return res.status(201).json({ error: null, data: isSectionDeleted });
//   } catch (err) {
//     console.log(err.message);
//     return res.status(422).json({
//       error: "unexpected error occurred while deleting section",
//       data: null,
//     });
//   }
// };

// exports.showSections = async (req, res) => {
//   try {
//     const sections = await Sections.find({});

//     console.log(sections);

//     if (sections.length === 0) {
//       return res.status(422).json({
//         error: "no sections available",
//         data: null,
//       });
//     }

//     return res.status(201).json({
//       error: null,
//       data: sections,
//     });
//   } catch (err) {
//     console.log(err.message);
//     return res.status(422).json({
//       error: "unexpected error occurred while getting sections",
//       data: null,
//     });
//   }
// };

// exports.showSectionbyId = async (req, res) => {
//   try {
//     const sectionId = req.params.id;

//     if (!sectionId) {
//       return res
//         .status(422)
//         .json({ error: "section id not given", data: null });
//     }

//     const section = await Sections.findOne({ _id: sectionId });

//     console.log(section);

//     if (!section) {
//       return res.status(422).json({
//         error: "no sections available",
//         data: null,
//       });
//     }

//     return res.status(201).json({
//       error: null,
//       data: section,
//     });
//   } catch (err) {
//     console.log(err.message);
//     return res.status(422).json({
//       error: "unexpected error occurred while getting section",
//       data: null,
//     });
//   }
// };

// exports.updateBookstatus = async (req, res) => {};
