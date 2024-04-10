const mongoose=require("mongoose");

const SIgnupSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const signupModel= mongoose.model("signup",SIgnupSchema);
module.exports = { signupModel };