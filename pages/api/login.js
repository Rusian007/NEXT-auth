import connection from '../../lib/mongodb'
const {LoginValidation} = require('../../lib/validation')
const bcrypt = require('bcrypt')
const User = require('../../model/user')
const secret = require('../../lib/validation')
const jwt = require('jsonwebtoken')
connection()

const login = async (req,res) =>{
  if (req.method == "POST"){
    const {error} = LoginValidation(req.body)
  if(error) return res.status(400).json({message: error.details[0].message})

  const userExists = await User.findOne({username: req.body.username})
  if (userExists){
    const validPass = await bcrypt.compare(req.body.password, userExists.password)
    if(validPass){
      //Create Token for user
      // login user
    
      const token = jwt.sign({_id: userExists._id},secret.TOKEN_SECRET)
      //res.header('auth-token', token).send({status: "Logged In", token})
      return res.json({token: token})
    } else{
      return res.json({message: "password doesn't match !"})
    }

  } else{
    return res.json({message: "User Doesn't Exists 🌚"})
  }
} else if(req.method == "GET"){
  return res.json({message: "Oy, Get is not allowed"})
}
}

module.exports = login
