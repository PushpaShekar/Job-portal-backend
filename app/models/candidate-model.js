const mongoose = require("mongoose")
const {Schema, model} = mongoose

const candidateSchema =new Schema ({
   userId: {
      type:Schema.Types.ObjectId,
      ref:"user"  
   },
   firstName: String,
   lastName: String,
   mobile: String,
   address: String
}, {timestamps: true})

const Candidate = model("candidate", candidateSchema)

module.exports = Candidate