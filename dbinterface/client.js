const ClientModel = require('../models/client')
const ObjectID = require('mongodb').ObjectID;

function ClientDBI(){}

ClientDBI.prototype.emailExists = function(email){
    return new Promise((resolve,reject)=>{
        ClientModel.findOne({email:email},{email:1})
            .then(client=>{
                if(!client){
                    return resolve(false)
                }else{
                    return resolve(true)
                }
            })
            .catch(error=>{
                return resolve(false)
            })
    })
}

ClientDBI.prototype.createClient = function(clientDetails){
    return new Promise((resolve,reject)=>{
        this.emailExists(clientDetails.email)
            .then(exists=>{
                if(exists){
                    throw 'Client EmailId already exists'
                }else{
                    return ClientModel.create(clientDetails)
                }
            })
            .then(client=>{
                console.log('client created :',client)
                return resolve(client)
            })
            .catch(error=>{
                return reject(error)
            })
    })
}

ClientDBI.prototype.updateClient = function(clientId,clientDetails){
    return new Promise((resolve,reject)=>{
        ClientModel.findOneAndUpdate({_id:ObjectID(clientId)},{$set:clientDetails},{new:true})
            .then(client=>{
                return resolve(client)
            })
            .catch(error=>{
                return reject(error)
            })
    })
}

ClientDBI.prototype.getTopBills = function(agencyId){
    return new Promise((resolve,reject)=>{
        ClientModel.find({agencyId:ObjectID(agencyId)},{_id:0,name:1,totalbill:1}).sort({totalbill:-1}).limit(3)
            .then(topBills=>{
                return resolve(topBills)
            })
            .catch(error=>{
                return reject(error)
            })
    })
}

module.exports = new ClientDBI()