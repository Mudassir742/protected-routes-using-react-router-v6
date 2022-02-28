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
  totalQuestions: {
    type: Number,
  },
  totalSections: {
    type: Number,
  },
});

chapterSchema.statics.getChaptersFromBook = async function (bookId) {
  return this.find({ bookId }, { name: 1, chapterNumber: 1, _id: 1 });
};

module.exports = mongoose.model("chapters", chapterSchema);
