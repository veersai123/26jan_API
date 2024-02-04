const { application } = require("express");
const { Student } = require("../models/adminModel")
const {validationResult} =require("express-validator")
const bcrypt = require('bcrypt');
let controller1=async(req,res)=>{

    const existingStudent=await Student.findOne({ name: req.query.name })
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
       if(existingStudent)
       {
        console.log("alraedy registered")
        return res.json({
            msg:"already registered",
            user:existingStudent
        })
       }
         const hash = bcrypt.hashSync(req.query.pass, 10);
         req.query.pass=hash
         console.log(req.query.pass)
        const Student1 = new Student({ name:req.query.name,pass:req.query.pass});
        Student1.save().then(()=>{
            console.log("yes done it")
        }).catch(()=>{
            console.log("err aa gyi")
        })
        res.json({
           msg:"okey1"
        })
    } 
}
module.exports={controller1}
