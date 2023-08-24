
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
   
    const createdUser = await user.save()

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
})