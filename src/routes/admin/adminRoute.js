const express=require("express")
const { controller1 } = require("../../controllers/adminController")
const { validator } = require("../../validators/adminvalidator")

const adminRoute=express.Router()
adminRoute.get('/admin/name_info',validator,controller1)

module.exports={adminRoute}

