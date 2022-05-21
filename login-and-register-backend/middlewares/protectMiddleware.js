const jwt = require("jsonwebtoken");
const user = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  console.log("in..........", req.headers.authorization);
  if (req.headers) {
    try {
      console.log("yes");
      //get token from header
      token = req.headers.authorization;
      console.log(token);
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
