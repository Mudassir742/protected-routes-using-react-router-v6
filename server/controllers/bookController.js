const Books = require("../models/bookModel");

exports.addNewBook = async (req, res) => {
  try {
    const { title, description, ISBN, author, publisher, status, assignedTo } =
      req.body;

    if (
      !title ||
      !description ||
      !ISBN ||
      !author ||
      !publisher ||
      !status ||
      !assignedTo
    ) {
      return res
        .status(422)
        .json({ error: "input fields are empty", data: null });
    }

    const newBook = await Books.create({
      title,
      description,
      ISBN,
      author,
      publisher,
      status,
      assignedTo,
    });

    console.log(newBook);

    if (!newBook) {
      return res.status(422).json({ error: "Book not created", data: null });
    }

    return res.status(201).json({ error: null, data: newBook });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while creating book",
      data: null,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;

    if (!bookId) {
      return res.status(422).json({ error: "book id not given", data: null });
    }

    const isBookDeleted = await Books.deleteOne({ _id: bookId });

    console.log(isBookDeleted.deletedCount);

    if (!isBookDeleted.deletedCount) {
      return res
        .status(422)
        .json({ error: "error while deleting book", data: null });
    }

    return res.status(201).json({ error: null, data: isBookDeleted });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({
      error: "unexpected error occurred while deleting book",
      data: null,
    });
  }
};

exports.showBooks = (req, res) => {};

exports.showBookbyId = (req, res) => {};

exports.updateBookInfo = (req, res) => {};
