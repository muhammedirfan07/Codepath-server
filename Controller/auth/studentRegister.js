const Students = require("../../models/student/studentSchema")

exports.StudentRegisterController = async(req,res)=>{
    console.log("inside the student register controller --");
    console.log(" student body =", req.body);
    const {fullName,email, password,role}= req.body
    try {
    if(!fullName || !email || !password)
       { return res.status(403).json({error:"all filed required.. "})
}
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email))
        {return res.status(400).json({ error:"invalid email formate "})}
    if(password.length<8){
         return res.status(400).json({error:"Minimum 8 charecter"})
    }

    const existedStudent = await Students.findOne({email})

    if(existedStudent){
       return  res.status(406).json({error:"email all ready exist please login "})
    }

    const newStudent = new Students({
        fullName,
        email, 
        password,
        role : role ||"student"
    })
     await newStudent.save()
    res.status(201).json({message:"User registered successfully",student:newStudent})
     
    } catch (error) {
      if (error.code === 11000) {
      return res.status(400).json({ error: "Email already exists" });
    }
    res.status(500).json({ error: "Server error",details:error.message})  
    }
}