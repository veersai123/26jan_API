const mongoose=require("mongoose")

let studentSchema={ name: String,pass:String}
const Student = mongoose.model('Student',studentSchema );

module.exports={Student}
