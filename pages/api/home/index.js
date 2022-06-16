const {auth} = require('../../../lib/validation')

const home = (req, res)=>{
  const authenticate = auth(req, res)
  
  if (authenticate === 401){
    return res.status(401).send({message: "Access Denied"})
  } else if (authenticate === 200){
    return 	res.json({
  		message: "In development"
  	})
  } else if(authenticate === 400){
    res.status(400).send({message: "Invalid Token"})
  }

}
module.exports = home
