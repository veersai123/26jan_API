const express=require("express")
const app=express()
const { adminRoute } = require("./routes/admin/adminRoute")
const { mongoose } = require("./config/db")
require("dotenv").config()

let port=process.env.PORT ||5000

app.use(adminRoute)

app.listen(port,()=>{
    console.log("server is running on",port)
})