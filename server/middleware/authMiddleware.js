const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  console.log(token);

  if (!token) {
    return res.status(422).json({ error: "no token given", data: null });
  }

  jwt.verify(token, process.env.JWT_KEY, (err, authorizedData) => {
    if (err) {
      return res
        .status(422)
        .json({ error: "unexpected error while comparing token", data: null });
    }

    req.user = authorizedData;

    return next();
  });
};

module.exports = authenticateToken;
