 const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema(
    {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, default:null},
    googleId: { type: String, },
    avatarUrl: { type: String },
    headline: { type: String, default: "" }, 
    role: {
        type: String,
        enum: ["student", "admin"],
        default: "student"
    },
    location: { type: String, default: "" },
     connectedAccounts: {
      github: String,
      twitter: String,
      linkedin: String,
      website: String,
    },
    createAt:{
        type :Date ,
        default : Date.now
    }
    }
)
const Student =  mongoose.model("Student", StudentSchema)
module.exports = Student