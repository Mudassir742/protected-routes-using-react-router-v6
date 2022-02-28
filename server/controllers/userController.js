const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ error: "fields are empty", data: null });
    }

    const existedUser = await User.findOne({ email: email });

    console.log(existedUser);

    if (!existedUser) {
      return res.status(422).json({ error: "user not found", data: null });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existedUser.password
    );

    console.log(isPasswordCorrect);

    if (!isPasswordCorrect) {
      return res
        .status(422)
        .json({ error: "incorrect email or password", data: null });
    }

    const token = jwt.sign(
      {
        name: existedUser.name,
        userId: existedUser._id,
        password: existedUser.password,
        role: existedUser.role,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      error: null,
      data: {
        name: existedUser.name,
        userID: existedUser._id,
        role: existedUser.role,
        token: token,
      },
    });
  } catch (err) {
    console.log("Error in Login catch : ", err.message);
    return res.status(500).json({ error: err.message, data: null });
  }
};
exports.addNewUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(403).json({ error: "fields are empty", data: null });
    }

    const isEmailAlreadyExists = await User.find({ email: email });

    if (isEmailAlreadyExists.length !== 0) {
      return res
        .status(422)
        .json({ error: "email already exists", data: null });
    }

    const newUser = new User({
      name,
      email,
      password,
      role,
    });

    const registerUser = await newUser.save();

    if (registerUser) {
      return res.status(200).json({
        error: null,
        data: { userID: registerUser._id, name: registerUser.name },
      });
    }

    return res
      .status(422)
      .json({ error: "unable to register user", data: null });
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ error: "unexpected error occurred", data: null });
  }
};
