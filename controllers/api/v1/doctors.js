const Doctor=require('../../../models/doctors');
const jwt=require('jsonwebtoken');

// **************************Create An Async Function For Doctor's  Registeration:*****************

module.exports.register=async function(req,res){
    try {

         // Find By Email for Registration

     let doctor = await  Doctor.findOne({email:req.body.email});
        if(doctor){
            return res.json(409,{
                message:'Doctor Is Already Registered'
            });
        }else{
           await Doctor.create(req.body);
           return res.json(200,{
               message:'Now Doctor is Successfully Registered'
           });
        }
    } catch (error) {
        console.log(error);
        return res.json(500,{
            message:'Internal server error'
        });
    }
}

// ********************Create An Async Function For Sign In of Doctors **************************

module.exports.logIn=async function(req,res){
    try {
        // Find By Email for LogIn
       let doctor=await Doctor.findOne({email:req.body.email});
        if(!doctor || doctor.password!=req.body.password){

            return res.json(422,{
                message:"Invalid Username/Password"
            })

        }else{
            return res.json(200,{
                message:'signed in successfull',
                data:{
                    token:jwt.sign(doctor.toJSON(),
                    'secret',
                    {expiresIn:10000000})
                }
            });
        }


    } catch (error) {
        console.log(error);
        return res.json(500,{
            message:'Internal server error'
        });
    }
}