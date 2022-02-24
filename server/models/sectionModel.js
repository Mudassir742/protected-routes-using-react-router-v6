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
    rquired: [true, "enter book section name"],
  },
  totalQuestions: {
    type: String,
  },
});

module.exports = mongoose.model("sections", sectionSchema);
