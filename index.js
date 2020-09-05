const express=require('express');
const port=8000;
const app=express();



// To setUp Router
app.use('/',require('./routes'));

// To Run Server
app.listen(port,function(err){
    if(err){
        console.log('Oops! Error in Running The Server.')
    }
    console.log(`Server is Running on port:${port}`);
});

