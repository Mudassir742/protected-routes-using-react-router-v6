const mongoose = require("mongoose");

const sectionSchema = mongoose.Schema({
  bookId: {
    type: mongoose.Schema.ObjectId,
    ref: "books",
    required: [true],
  },
  chapterId: {
    type: mongoose.Schema.ObjectId,
    ref: "chapters",
    required: [true],
  },
  name: {
    type: String,
    required: [true, "enter book section name"],
  },
  totalQuestions: {
    type: Number,
  },
});

module.exports = mongoose.model("sections", sectionSchema);
