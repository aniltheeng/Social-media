const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.isAuthenticated = async (req,res,next)=>{
   try {
    const {token} = req.cookies

    if(!token){
        res.status(401).json({message:`please login in first`})
    }

    const decode = await jwt.verify(token,process.env.JWT_SECRET)

    req.user = await User.findById(decode._id)
    next()

   } catch (error) {
       res.status(500).json({
           message:error.message
       })
   }
}

