const User = require("../models/userModel");

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ error: "fields are empty", data: null });
    }

    const existedUser = await User.find(
      { email: email, password: password },
      { _id: 1, name: 1 }
    );

    if (existedUser.length === 0) {
      return res.status(422).json({ error: "user not found", data: null });
    }

    return res.status(201).json({ error: null, data: existedUser[0] });
  } catch (err) {
    console.log("Error in Login catch : ", err.message);
    return res.status(422).json({ error: err.message, data: null });
  }
};
exports.userSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(403).json({ error: "fields are empty", data: null });
    }

    const isEmailAlreadyExists = await User.find({ email: email });

    if (isEmailAlreadyExists.length !== 0) {
      return res
        .status(422)
        .json({ error: "email already exists", data: null });
    }

    const newUser = new User({
      name: name,
      email: email,
      password: password,
    });

    const registerUser = await newUser.save();

    if (registerUser) {
      return res.status(201).json({ error: null, data: registerUser });
    }

    return res
      .status(422)
      .json({ error: "unable to register user", data: null });
  } catch (err) {
    console.log(err.message);
    return res
      .status(422)
      .json({ error: "unexpected error occurred", data: null });
  }
};
