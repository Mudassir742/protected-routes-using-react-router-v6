const Sections = require("../models/sectionModel");

exports.addNewSection = async (req, res) => {
  try {
    const { bookId, chapterId, name } = req.body;

    if (!bookId || !chapterId || !name) {
      return res
        .status(422)
        .json({ error: "input fields are empty", data: null });
    }

    const newSection = await Sections.create({
      bookId,
      chapterId,
      name,
    });

    console.log(newSection);

    if (!newSection) {
      return res.status(422).json({ error: "section not created", data: null });
    }

    return res.status(201).json({ error: null, data: newSection });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while creating section",
      data: null,
    });
  }
};

exports.deleteSection = async (req, res) => {
  try {
    const sectionId = req.params.id;

    if (!sectionId) {
      return res.status(422).json({ error: "book id not given", data: null });
    }

    const isSectionDeleted = await Sections.deleteOne({ _id: sectionId });

    console.log(isSectionDeleted.deletedCount);

    if (!isSectionDeleted.deletedCount) {
      return res
        .status(422)
        .json({ error: "error while deleting section", data: null });
    }

    return res.status(201).json({ error: null, data: isSectionDeleted });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while deleting section",
      data: null,
    });
  }
};

exports.showBooks = async (req, res) => {
  try {
    const books = await Books.find({});

    console.log(books);

    if (books.length === 0) {
      return res.status(422).json({
        error: "no books available",
        data: null,
      });
    }

    return res.status(201).json({
      error: null,
      data: books,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while getting books",
      data: null,
    });
  }
};

exports.showBookbyId = async (req, res) => {
  try {
    const bookId = req.params.id;

    if (!bookId) {
      return res.status(422).json({ error: "book id not given", data: null });
    }

    const book = await Books.findOne({ _id: bookId });

    console.log(book);

    if (!book) {
      return res.status(422).json({
        error: "no books available",
        data: null,
      });
    }

    return res.status(201).json({
      error: null,
      data: book,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while getting book",
      data: null,
    });
  }
};

exports.updateBookstatus = async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookStatus = req.body.status;

    if (!bookStatus || !bookId) {
      return res.status(422).json({
        error: "book info not provided",
        data: null,
      });
    }

    const isStatusUpdated = await Books.updateOne(
      { _id: bookId },
      { $set: { status: bookStatus } }
    );

    console.log(isStatusUpdated);

    if (isStatusUpdated.modifiedCount === 0) {
      return res.status(422).json({
        error: "unable to update book",
        data: null,
      });
    }

    return res
      .status(201)
      .json({ error: null, data: isStatusUpdated.modifiedCount });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while updating status",
      data: null,
    });
  }
};
