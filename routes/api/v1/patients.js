const express=require('express');
const router=express.Router();
const passport=require('passport');
const patientsController=require('../../../controllers/api/v1/patients');
// For Routing of Patient's Regestration
router.post('/register',passport.authenticate('jwt',{session:false}),patientsController.register);
// For Routing of Patient's Create Post
router.post('/create-report/:id', passport.authenticate('jwt',{session:false}),patientsController.createReport);
// For Routing of Patient's All Reports Shown
router.get('/all-reports/:id',passport.authenticate('jwt',{session:false}),patientsController.allReports);
module.exports=router;