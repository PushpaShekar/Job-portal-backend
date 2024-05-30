const mongoose = require("mongoose")
const {Schema, model} = mongoose

const recruiterSchema = new Schema ({
   name:String,
   companyName:String,
   companyEmail: String,

})

const Recruiter= model("recruiter", recruiterSchema)

module.exports = Recruiter