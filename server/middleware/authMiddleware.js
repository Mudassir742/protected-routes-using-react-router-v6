const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    console.log(token);

    if (!token) {
      return res.status(401).json({ error: "no token given", data: null });
    }

    const authorizedData = jwt.verify(token, process.env.JWT_KEY);

    req.user = authorizedData;

    return next();
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ error: "unexpected error while comparing token", data: null });
  }
};

module.exports = authenticateToken;
