const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authenticate = (req, res, next) => {
  const header = req.header("Authorization");

  try {
    const seretKey = process.env.KEY;
    if (header) {
      const token = header.slice(7, header.length);
      const decode = jwt.verify(token, seretKey);
      req.user = decode;
      next();
    } else {
      res.status(401).json({ message: "You need to sign in first" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const authorize = (roles) => (req, res, next) => {
  const { user } = req;
  if (roles.indexOf(user.role) > -1) {
    next();
  } else {
    res.status(401).json({ message: "Your not authorize" });
  }
};

module.exports = {
  authenticate,
  authorize,
};
