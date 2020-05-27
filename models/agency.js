const mongoose = require("mongoose")

const AgencySchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    address1:{
        type:String,
        require:true
    },
    address2:{
        type:String
    },
    state:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    phone_number:{
        type:String,
        require:true
    }
})

const AgencyModel = mongoose.model('agency',AgencySchema)
module.exports = AgencyModel;
