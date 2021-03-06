const Patient=require('../../../models/patients');
const Report=require('../../../models/reports');
const jwt=require('jsonwebtoken');
const { report } = require('../../../routes/api/v1/patients');

//  ************Create An Async Function For Registeration of Patients:*****************

module.exports.register= async function(req,res){
    // Patient Find Using Contact
    try{
        let patient= await Patient.findOne({contact:req.body.contact}).populate('reports');
        if(patient){
            return res.json(409,{
                message:"Patient Already Registered",
                data:patient
            });
        }else{
        await Patient.create(req.body);
            return res.json(200,{
                message:'Patient has been successfully Registered'
            });
        }
    }
    catch(error){
        console.log(console.error);
        return res.json(500,{
            message:'Internal Server Error'
        });
    }


}
// *****************Create Report**********************

module.exports.createReport=async function(req,res){
    try {
        // Patient Find Using url Id
       let patient = await Patient.findById(req.params.id);
       if(patient){
        //**********Patient is found now create report******************
            
        let headers=req.headers.authorization;
        let tokenArray=headers.split(' ');
        let token=tokenArray[1];
        let doctor=jwt.decode(token);
        
       let report=await Report.create({
            doctor:doctor._id,
            patient:req.params.id,
            status:req.body.status
        });
        
       patient.reports.push(report);
       patient.save();

        return res.json(200, {
            message: patient.name + ' Report Has been created'
        });

       }
        else{
           return res.json(404, {
               message: 'Patient not found'
           });
        }
    } catch (error) {
        console.log(error);
        return res.json(500,{
            message:'Internal Server Error'
        });
    }
}

//******************All Reports Should visible*************************

module.exports.allReports=async function(req,res){
    try {
        // Patient Find By Id and doctors and reports also have been shown in details using populate function 
        
    let patient= await Patient.findById(req.params.id).populate({
        path: 'reports',
        populate: {
            path: 'doctor'
        }
    })
    .sort({'createdAt':1});

    
        if(patient){

            return res.json(200,{
                message:'All Reports of ' +   patient.name,
                data:patient.reports
            });

        }else{

            return res.json(404,{
                message:'Patient Does Not Exist!'
            });
        }
        
    } 
    catch (error) {
        console.log(error);
        return res.json(500,{
            message:'Internal Server Error'
        });
        
    }

}