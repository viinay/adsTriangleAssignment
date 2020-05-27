const express = require('express')
const router = express.Router()
const ClientTF = require('../taskfunc/client');

router.post('/:id',function(req,res){
    const clientId = req.params.id;
    const clientDetails = req.body;

    ClientTF.updateClient(clientId,clientDetails)
        .then(client=>{
            return res.json(client)
        })
        .catch(error=>{
            return res.json(error)
        })
})
module.exports = router;