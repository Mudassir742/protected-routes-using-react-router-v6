const mongoose = require("mongoose");

const chapterSchema = mongoose.Schema({
  bookId: {
    type: mongoose.Schema.ObjectId,
    ref: "books",
    required: [true],
  },
  name: {
    type: String,
    required: [true, "enter book name"],
  },
  chapterNumber: {
    type: String,
    rquired: [true, "enter book chapter number"],
  },
  history: {
    type: String,
  },
  totalQuestions: {
    type: String,
  },
  totalSections: {
    type: String,
  },
});

module.exports = mongoose.model("chapters", chapterSchema);
