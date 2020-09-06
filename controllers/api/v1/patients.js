const Patient=require('../../../models/patients');
module.exports.register= async function(req,res){
    let patient= await Patient.findOne({contact:req.body.contact});
    try{
    if(patient){
        return res.json(409,{
            message:"Patient Already Registered",
            data:patient
        });
    }else{
       await Patient.create(req.body);
        return res.json(200,{
            message:'Patient has been successfully Regestered'
        })
    }
}
catch(error){
    console.log(console.error);
    return res.json(500,{
        message:'Internal Server Error'
    });
}


}