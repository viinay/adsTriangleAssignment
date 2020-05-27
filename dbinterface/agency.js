const AgencyModel = require('../models/agency')
const ObjectID = require('mongodb').ObjectID;

function AgencyDBI(){}

AgencyDBI.prototype.emailExists = function(email){
    return new Promise((resolve,reject)=>{
        AgencyModel.findOne({email:email},{email:1})
            .then(agency=>{
                console.log(agency)
                if(!agency){
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

AgencyDBI.prototype.getPropsById = function(agencyId,props){
    return new Promise((resolve,reject)=>{
        AgencyModel.findOne({_id:ObjectID(agencyId)},props)
            .then(props=>{
                return resolve(props)
            })
            .catch(error=>{
                return reject(error)
            })
    })
}

AgencyDBI.prototype.createAgency = function(agencyDetails){
    return new Promise((resolve,reject)=>{
        this.emailExists(agencyDetails.email)
            .then(exists=>{
                if(exists){
                    throw 'Agency EmailId already exists'
                }else{
                    return AgencyModel.create(agencyDetails)
                }
            })
            .then(agency=>{
                console.log('agency crated :',agency)
                return resolve(agency)
            })
            .catch(error=>{
                console.log(error)
                return reject(error)
            })
    })
}

AgencyDBI.prototype.updateAgency = function(agencyId,data){
    return new Promise((resolve,reject)=>{
        
    })
}

module.exports = new AgencyDBI()