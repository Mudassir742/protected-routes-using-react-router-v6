const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter user name"],
  },
  email: {
    type: String,
    required: [true, "enter user name"],
  },
  password: {
    type: String,
    required: [true, "enter user name"],
  },
  role: {
    type: String,
    enum: ["manager", "QA", "DEO"],
    default: "DEO",
  },
});

module.exports = mongoose.model("users", userSchema);
