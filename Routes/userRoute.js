const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const User=require('../Models/userModel')
const asyncHandler=require('express-async-handler')
router.post('/auth/register',asyncHandler(async(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    const useravailable= await User.findOne({username})
    if(useravailable)
    {
        return res.status(400).json({ message: "Username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.json({ message: "User registered successfully" });
}))

router.get("/auth/user",asyncHandler(async(req,res)=>{
  const users=await User.find()
  res.status(201).json(users)
}))

router.post('/auth/login',asyncHandler(async(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    
  const user = await User.findOne({ username });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });

}))


  const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      jwt.verify(authHeader, "secret", (err) => {
        if (err) {
          return res.sendStatus(403);
        }
        next();
      });
    } else {
      res.sendStatus(401);
    }
  };

module.exports=router,verifyToken

// module.exports=