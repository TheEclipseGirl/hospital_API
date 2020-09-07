const mongoose=require('mongoose');
const Doctor = require('./doctors');
const Patient = require('./patients');

// Schema For Report of Patient whoever is in DATABASE

const reportSchema=new mongoose.Schema({

    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Doctor

    },

    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Patient
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
