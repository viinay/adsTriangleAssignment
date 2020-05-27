const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()
const PORT = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
 
mongoose.connect('mongodb://localhost/adsTriangle',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},function(error){
    if(error){
        console.log(error)
    }else{
        console.log('mongodb connected')
    }
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

/*routes*/
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/agency',require('./routes/agency'))
app.use('/api/client',require('./routes/client'))

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))