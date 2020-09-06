const mongoose=require('mongoose');
const Doctor = require('./doctors');
const Patient = require('./patients');
const reportSchema=new mongoose.Schema({

    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Doctor

    },

    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Patient
    },

    date:{
        type:date,
        required:true
    },
   
    status:{
        type:String,
        enum: ['Negative','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit'],
        required:true   
    }   
    

},{
    timestamps:true

});
const Report=mongoose.model('Report',reportSchema);
module.exports=Report;
