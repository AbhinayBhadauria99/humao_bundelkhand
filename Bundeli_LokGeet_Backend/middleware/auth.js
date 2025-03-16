const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    console.log("Authorization Header:", req.headers.authorization); // Debugging

    if (!req.headers.authorization) {
      return res.status(401).json({ error: "Authorization header missing" });
    }

    const tokenParts = req.headers.authorization.split(" ");

    if (tokenParts.length === 1) {
      // If there's no "Bearer", assume it's just the token
      tokenParts.unshift("Bearer");
    }

    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      return res.status(401).json({ error: "Invalid token format" });
    }

    const token = tokenParts[1];

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    req.locals = verifyToken.userId;
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = auth;
