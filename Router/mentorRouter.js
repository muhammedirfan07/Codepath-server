const express =require('express')
const router = express.Router()
const authentication = require("../Controller/auth/mentorRegister")


router.post("/mentor/register",authentication.mentorRegisterController)

module.exports =router