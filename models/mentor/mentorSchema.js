const mongoose = require('mongoose')

const MentorSchema = new mongoose.Schema({
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, default:null
     },
    googleId: { type: String, },
    avatarUrl: { type: String },
    role: {
        type: String,
        default: "mentor"
    },
    title: { type: String, default: "" },
    about: { type: String, default: "" },
    hourlyRate: { type: Number, default: 0 },
    expertise: { type: [String], default: [] },
    interests: { type: [String], default: [] },
    languages: { type: [String], default: ["English"] },
    locationType: { type: String, enum: ["remote", "onsite", "hybrid"], default: "remote" },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    createAt: {
        type: Date,
        default: Date.now
    }
})

const Mentor = mongoose.model("Mentor",MentorSchema)
 module.exports = Mentor