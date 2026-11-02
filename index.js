require("dotenv").config()
const express = require("express")
const  cors = require("cors")
require("./DataBase/dataBaseConnection")
const mentorRouter = require("./Router/mentorRouter")
const studentRouter = require("./Router/studentRouter")
const AppServer =  express()
AppServer.use(express.json())
AppServer .use(cors())

// routers---
AppServer.use(mentorRouter)
AppServer.use(studentRouter)

AppServer.get('/',(req,res)=>{
    res.status(200).send("<h1>  Hello CodePath is here-- </h1>")
})

const port = process.env.PORT || 5000

AppServer.listen(port,()=>{
    console.log(`The  port is running ${port}`)
})

