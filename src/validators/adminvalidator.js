const {check}=require("express-validator")
let validator=[
    check('name').notEmpty(),
    check('pass').notEmpty()
]
module.exports={validator}