const Mentors= require("../auth/mentorRegister")
const Students = require("../auth/studentRegister")
const jwt =require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const users = require("../../../../MERN PROJECT/EV-charging booking project/Backend/Models/UserModal")

exports.LoginController = async(req,res)=>{
   console.log(" inside the login controller--");
   const {email , password} = req.body
    
    try {
         const existedUsers = ( await Mentors.findOne({email})) || (await Students.findOne({email}))
         console.log("existed users =", existedUsers);
     
          if(!existedUsers){
              return res.this.status(406).json ({message:" user data not find please sign up"})
          }

          if( existedUsers.role === "admin"){
            if(password!=existedUsers.password ){
                return res.status(403).json({ message: "Incorrect Email/Password. Try again!" });
            }
          }else{
            const match =  await bcrypt.compare (password, existedUsers.password)
            if(!match){
                return res.status(402).json({message:"Incorrect Email/Password. Try again!"})
            }
          }

          const token = jwt.sign(
            {id:existedUsers._id,role:existedUsers.role},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
          )
           
          console.log(" the TOKEN is =",token);
          
          
         
    } catch (error) {
        
    }
   
}