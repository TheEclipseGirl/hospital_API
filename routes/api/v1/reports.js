const express=require('express');
const passport=require('passport');
const router=express.Router();
const reportsController=require('../../../controllers/api/v1/reports');


router.get('/:status',passport.authenticate('jwt',{session:false}),reportsController.filter);

module.exports=router;