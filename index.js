const express=require('express');
const port=8000;
const app=express();
// For COnnecting to MongoDB
const db=require('./config/mongoose');

// for getting Schema OR Form Details (Key Value Pairs)
app.use(express.urlencoded());

// To setUp Router
app.use('/',require('./routes'));

// To Run Server
app.listen(port,function(err){
    if(err){
        console.log('Oops! Error in Running The Server.')
    }
    console.log(`Server is Running on port:${port}`);
});

