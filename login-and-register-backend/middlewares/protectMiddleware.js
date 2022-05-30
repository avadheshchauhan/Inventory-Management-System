const jwt = require("jsonwebtoken");
const user = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers) {
    try {
      //get token from header
      token = req.headers.authorization;
      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);
      //get user from token
      req.user = await user.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error("Not Authorized User");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized , no token");
  }
});
module.exports = protect;
