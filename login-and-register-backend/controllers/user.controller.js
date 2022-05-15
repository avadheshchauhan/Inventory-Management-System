const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const gererateToken = require('../util/generateToken');

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body;
    console.log(req.body)
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User Already Exists!!!');
  }else{
    const user = await User.create({
      fullname:fullname,
      email:email,
      password:password
    });
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.fullname,
        email: user.email,
        token: gererateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error('Error Occured!!!');
    }
  
    
  }})

  

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (email && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      token: gererateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid Email or Password!!');
  }
});

module.exports = { registerUser, authUser }
