 const mongoose = require("mongoose")

 const DataBase_Url = process.env.DATABASE_URL

 mongoose.connect(DataBase_Url).then(()=>{
    console.log(" ---the MongoDB Connected successfully---");
 }).catch((error)=>{
     console.error("Error =", error.message)
    console.log("---the mongoDb Connection is Failed---");
    
 })