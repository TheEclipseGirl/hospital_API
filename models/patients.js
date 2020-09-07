const mongoose=require('mongoose');

// Schema For Patient whoever is in DATABASE

const patientsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    reports:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Report'
        }

    ]

},
{
    timestamps:true
});
const Patient=mongoose.model('Patient',patientsSchema);
module.exports=Patient;