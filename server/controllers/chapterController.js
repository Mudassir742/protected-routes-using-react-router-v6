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

exports.deleteChapter = async (req, res) => {
  try {
    const chapterId = req.params.id;

    if (!chapterId) {
      return res
        .status(422)
        .json({ error: "chapter id not given", data: null });
    }

    const isChapterDeleted = await Chapters.deleteOne({ _id: chapterId });

    console.log(isChapterDeleted.deletedCount);

    if (!isChapterDeleted.deletedCount) {
      return res
        .status(422)
        .json({ error: "error while deleting chapter", data: null });
    }

    return res.status(201).json({ error: null, data: isChapterDeleted });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while deleting chapter",
      data: null,
    });
  }
};
exports.showChapters = async (req, res) => {
  try {
    const chapters = await Chapters.find({});

    console.log(chapters);

    if (chapters.length === 0) {
      return res.status(422).json({
        error: "no chapters available",
        data: null,
      });
    }

    return res.status(201).json({
      error: null,
      data: chapters,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while getting chapters",
      data: null,
    });
  }
};
exports.showChapterbyId = async (req, res) => {
  try {
    const chapterId = req.params.id;

    if (!chapterId) {
      return res
        .status(422)
        .json({ error: "chapter id not given", data: null });
    }

    const chapter = await Chapters.findOne({ _id: chapterId });

    console.log(chapter);

    if (!chapter) {
      return res.status(422).json({
        error: "no chapters available",
        data: null,
      });
    }

    return res.status(201).json({
      error: null,
      data: chapter,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while getting chapter",
      data: null,
    });
  }
};
exports.updateChapter = (req, res) => {};
