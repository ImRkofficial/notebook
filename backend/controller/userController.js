
const User = require('../models/User');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken')



// Create User
exports.createUser = ('/',async (req,res)=>{
   try {
      const existUser =await User.findOne({email:req.body.email})
if(existUser){
   res.status(400).json({message:'User already exist!'})
}else{
   const saltRounds=10;
   const newPass =await bcrypt.hash(req.body.password,saltRounds)
   console.log(newPass)

    const user = new User({
      name:req.body.name,
      email:req.body.email,
      password:newPass
    })
   
    await user.save()

    const jwtdata= {
      data:{
         user:{
            id:user.id
         }
      }
    }
    const authToken = jwt.sign(jwtdata,process.env.JWT_SECRET)
    console.log(authToken)

    res.json({authToken})
}
   } catch (error) {
   res.status(400).send(error)
   }
});



// Authenticate user Login
exports.loginUser = ('/',async (req,res)=>{
  try {
   const {email,password} =req.body;

   const userEmailCheck = await User.findOne({email:email});

   if(!userEmailCheck){
     return res.status(400).json({error:'Please Enter right credentials'})
   }
   const user = await User.findOne({email:email})
  console.log(user.password)
   const comparedPassword = await bcrypt.compare(password,user.password);

   if(!comparedPassword){
    return   res.status(400).json({error:'Please Enter right credentials'})  
   }

   const jwtdata= {
      data:{
         user:{
            id:user.id
         }
      }
    }
    const authToken = jwt.sign(jwtdata,process.env.JWT_SECRET)
    console.log(authToken)

    res.json({authToken})
   
  } catch (error) {
  res.status(400).send(error)
  }
})


// Get Logged In User Details
exports.getUser =  ('/',async (req,res)=>{
   try {
       let userId = req.user.id;
       console.log(userId)
      const user = await User.findById(userId).select('-password');
      console.log('Hello')
      console.log(user)
      res.send(user)
   } catch (error) {
      res.status(500).json({
         error:"Internal server error"
      })
   }
})