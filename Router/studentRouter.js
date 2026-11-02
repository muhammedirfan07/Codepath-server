const express = require("express")
const router = express.Router()
const authentication = require("./../Controller/auth/studentRegister")

router.post('/student/register',authentication.StudentRegisterController)





module.exports = router