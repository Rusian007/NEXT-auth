import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import connection from '../../../lib/mongodb'
import User from "../../../model/user"
const bcrypt = require('bcrypt')
connection()

const options ={
  providers: [
   Providers.Credentials({
    name: "Custom Provider",
    credentials: {
      username: { label:"username", type: "text", placeholder: "Your Username" },
      password: { label: "password", type: "password" }
    },async authorize(credentials){
      const username = credentials.username
      const pass = credentials.password

      const ExistingUser = await User.findOne({username: username})

      if (ExistingUser){
        const validPass = await bcrypt.compare(pass, ExistingUser.password)
        if(validPass){
          return ExistingUser
        } else {
          return false
        }
      } else{
        return false
      }

    }
   }),
   // any additional providers
 ],
 session: {
   jwt: true,
 },
 pages: {
    signIn: '../../login',
    error: '../../login',

  }
}
export default (req,res) => NextAuth(req, res, options)
