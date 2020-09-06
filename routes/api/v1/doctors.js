const express=require('express');
const router=express.Router();
const doctorsController=require('../../../controllers/api/v1/doctors');
const Doctor = require('../../../models/doctors');
// For Regestration
router.post('/register',doctorsController.register);

// For SIgnIn
router.post('/logIn',doctorsController.logIn);
module.exports=router;