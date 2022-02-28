const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter user name"],
  },
  email: {
    type: String,
    required: [true, "enter email"],
  },
  password: {
    type: String,
    required: [true, "enter password"],
  },
  role: {
    type: String,
    enum: ["admin", "manager", "QA", "DEO"],
    default: "DEO",
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

module.exports = mongoose.model("users", userSchema);
