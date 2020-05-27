const ClientDBI = require('../dbinterface/client')

function Client(){

}

Client.prototype.createClient = function(clientDetails){
    return new Promise((resolve,reject)=>{
        ClientDBI.createClient(clientDetails)
            .then(client=>{
                return resolve(client)
            })
            .catch(error=>{
                return reject(error)
            })
    })
}

Client.prototype.updateClient = function(clientId,clientDetails){
    return new Promise((resolve,reject)=>{
        ClientDBI.updateClient(clientId,clientDetails)
            .then(client=>{
                return resolve(client)
            })
            .catch(error=>{
                return reject(error)
            })
    })
}


module.exports = new Client()