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

    jwt.sign(
      {
        name: existedUser.name,
        userId: existedUser._id,
        password: existedUser.password,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" },
      async (err, token) => {
        //if (err) throw err.message;
        if (err) {
          console.log(err.message);
          return res
            .status(422)
            .json({ error: "unable to generate token", data: null });
        }

        console.log(token);

        const saveToken = await User.updateOne(
          { _id: existedUser._id },
          { $set: { token: token } }
        );

        if (saveToken) {
          return res.status(201).json({
            error: null,
            data: {
              name: existedUser.name,
              userID: existedUser._id,
              token: token,
            },
          });
        }

        return res
          .status(422)
          .json({ error: "unable to save token", data: null });
      }
    );
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

    const encryptedPasswrod = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name,
      email: email,
      password: encryptedPasswrod,
    });

    const registerUser = await newUser.save();

    if (registerUser) {
      return res.status(201).json({
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
      .status(422)
      .json({ error: "unexpected error occurred", data: null });
  }
};
