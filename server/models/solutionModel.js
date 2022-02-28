const mongoose = require("mongoose");

const solutionSchema = mongoose.Schema({
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
  sectionId: {
    type: mongoose.Schema.ObjectId,
    ref: "sections",
    required: [true],
  },
  questionNumber: {
    type: String,
    required: [true, "enter question number"],
  },
  questionDetail: {
    type: String,
    required: [true, "enter question detail"],
  },
  answer: {
    type: String,
    default:"N/A"
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("solutions", solutionSchema);
