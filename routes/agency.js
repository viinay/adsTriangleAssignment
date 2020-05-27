const express = require('express')
const router = express.Router()
const AgencyTF = require('../taskfunc/agency');
const ClientTF = require('../taskfunc/client');


router.post('/',function(req,res){
    let {agencyDetails,clientDetails} = req.body;

    AgencyTF.createAgency(agencyDetails)
        .then(agency=>{
            clientDetails.agencyId = agency._id;
            agencyDetails = agency;
            return ClientTF.createClient(clientDetails)
        })
        .then(client=>{
            clientDetails = client;
            return res.json({agencyDetails,clientDetails})
        })
        .catch(error=>{
            return res.json(error)
        })
})

router.get('/:id/top_clients',function(req,res){
    const agencyId = req.params.id;
    /*
        should return name of agency along with client
        details which has top clients with maximum total bill
        response feilds : agencyName,clientName,totalBill
    */

    AgencyTF.getTopClient(agencyId)
        .then(data=>{
            return res.json(data)
        })
        .catch(error=>{
            return res.json(error)
        })
})

module.exports = router;