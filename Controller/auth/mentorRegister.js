const Mentors = require("../../models/mentor/mentorSchema")

// mentor  register ----
exports.mentorRegisterController =async(req,res)=>{
  console.log("inside the mentor  register controller---");
  console.log("body:", req.body)
  const{fullName,email,password}=req.body
  try {
    if(!fullName || !email || !password){
       return  res.status(403).json({ error: "all filed required.."})
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email) ){
      return res.status(400).json({ error :"invalid email formate .."})
    }
    
    if(password.length<8)
    {
      return  res.status(400).json({error:'Minimum 8 charecter'})
    }
    
    const existedMentor = await Mentors.findOne ({email})
    if(existedMentor){
      return res.status(406).json({message:" email all ready exist please login.."})
    }
   
   const newMentor = new Mentors({
    fullName,email,password, role :"mentor"
   })
    await newMentor.save()
    res.status(201).json({message:"User registered successfully", mentor: newMentor })

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "Email already exists" });
    }
    res.status(500).json({ error: "Server error", details: error.message });
  }
  
}