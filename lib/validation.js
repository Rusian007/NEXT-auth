const joi = require('joi')
const jwt = require('jsonwebtoken')
const TOKEN_SECRET = "Secret123456789" //for testing only, not for production


const registerValidation = (data) =>{

  const schema =joi.object({
    name: joi.string().required(),
    username: joi.string().min(3).required(),
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
    password2: joi.string().required()
  })

  return schema.validate(data)
}

const LoginValidation = (data) =>{

  const schema =joi.object({
    username: joi.string().min(3).required(),
    password: joi.string().min(6).required()
  })

  return schema.validate(data)
}

//Middleware- checks token
const auth = (req,res) => {

  const token = req.headers.auth_token
  if(!token) return 401// return res.status(401).send({message: "Access Denied"})

    try{
      const verified = jwt.verify(token, TOKEN_SECRET)
      req.user = verified
      return 200

    } catch(e){
      return 400//res.status(400).send({message: "Invalid Token"})
    }

}
module.exports.auth = auth
module.exports.TOKEN_SECRET = TOKEN_SECRET
module.exports.registerValidation = registerValidation
module.exports.LoginValidation = LoginValidation
