const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const gererateToken = require("../util/generateToken");


//to register the user
const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body;
  console.log(req.body);
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists!!!");
  } else {
    const user = await User.create({
      fullname: fullname,
      email: email,
      password: password,
    });

    if (user) {
      res.status(201).send({
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        token: gererateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Error Occured!!!");
    }
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
try{
  if (email && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      token: gererateToken(user._id),
    });
  } 
  else {
    console.log("er.........msg")
    return res.status(401).send({ message: "Invalid Email or Password" });
    // res.status(400)
    // throw new Error("Invalid Email or Password!!");
  }
}
  catch (err){
       
       res.status(500).send({ message: "Internal Server Error" });
       console.log('internal ')
       throw new Error("server error");

  }
});

const updateUser = async(req,res)=>{
  const {email,fullname,gender,mobileNo,address}=req.body
  const user ={
    fullname:fullname,
    email:email,
    mobileNo:mobileNo,
    gender:gender,
    address:address
}
  const findOne=await User.findOne({email:email})
  if(findOne.id===req.user.id){
    await User.updateOne({email:email},{$set:user})
    res.status(201).send({msg:"user updated Succesfully"})
  }else{
    res.status(401).send({msg:"user is not verifies"})
  }

}

module.exports = { registerUser, authUser,updateUser };
