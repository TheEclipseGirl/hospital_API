const mongoose=require('mongoose');
const doctorsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:false
    }
},
{
    timestamps:true
});
const Doctor=mongoose.model('Doctor',doctorsSchema);
module.exports=Doctor;
