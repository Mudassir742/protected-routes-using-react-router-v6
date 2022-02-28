const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "enter book title"],
  },
  description: {
    type: String,
    required: [true, "enter book description"],
  },
  ISBN: {
    type: String,
    rquired: [true, "enter book ISBN"],
  },
  author: {
    type: String,
    rquired: [true, "enter book author"],
  },
  pulisher: {
    type: String,
    rquired: [true, "enter book pulisher"],
  },
  status: {
    type: String,
    rquired: [true, "enter book status"],
  },
  assignedTo: {
    type: String,
    rquired: [true, "enter book assignedTo"],
  },
  history: {
    type: String,
  },
  totalQuestions: {
    type: String,
  },
  totalDataEntered: {
    type: String,
  },
  NA: {
    type: Boolean
  },
});

module.exports = mongoose.model("books", bookSchema);
