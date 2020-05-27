const AgencyDBI = require('../dbinterface/agency')
const ClientDBI = require('../dbinterface/client')

function Agency(){

}

// Agency.prototype.getPropsById = function(agency,props){
//     return new Promise((resolve,reject)=>{
//         AgencyDBI.getPropsById(agency,props)
//             .then(props=>{
//                 return resolve(props)
//             })
//             .catch(error=>{
//                 return reject(error)
//             })
//     })
// }

Agency.prototype.createAgency = function(agencyDetails){
    return new Promise((resolve,reject)=>{
        console.log('in create agency :',agencyDetails)
        AgencyDBI.createAgency(agencyDetails)
            .then(agency=>{
                return resolve(agency)
            })
            .catch(error=>{
                return reject(error)
            })
    })
}

Agency.prototype.getTopClient = function(agencyId){
    return new Promise((resolve,reject)=>{
        let agencyName;
        AgencyDBI.getPropsById(agencyId,{name:1,_id:0})
            .then(props=>{
                agencyName = props.name;
                return ClientDBI.getTopBills(agencyId)
            })
            .then(topBills=>{
                return resolve({agencyName,clients:topBills})
            })
            .catch(error=>{
                return reject(error)
            })
    })
}

module.exports = new Agency()