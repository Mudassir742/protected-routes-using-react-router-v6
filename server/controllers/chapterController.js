const Chapters = require("../models/chapterModel");

exports.addNewChapter = async (req, res) => {
  try {
    const { bookId, name, chapterNumber } = req.body;

    if (!bookId || !name || !chapterNumber) {
      return res
        .status(422)
        .json({ error: "input fields are empty", data: null });
    }

    const newChapter = await Chapters.create({ bookId, name, chapterNumber });

    console.log(newChapter);

    if (!newChapter) {
      return res.status(422).json({ error: "Chapter not created", data: null });
    }

    return res.status(201).json({ error: null, data: newChapter });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while creating chapter",
      data: null,
    });
  }
};

exports.deleteChapter = (req, res) => {};
exports.showChapters = (req, res) => {};
exports.showChapterbyId = (req, res) => {};
exports.updateChapter = (req, res) => {};
