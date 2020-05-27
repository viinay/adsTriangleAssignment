const mongoose = require("mongoose")

const ClientSchema = mongoose.Schema({
    agencyId:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone_number:{
        type:String,
        require:true
    },
    totalbill:{
        type:Number,
        require:true
    }
})

const ClientModel = mongoose.model('client',ClientSchema)
module.exports = ClientModel;
