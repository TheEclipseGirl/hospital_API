const express=require('express');
const router=express.Router();
// Route For Doctor
router.use('/doctors',require('./doctors'));

// Route For Patient
router.use('/patients',require('./patients'));

// Route For Reports
router.use('/reports',require('./reports'));
module.exports=router;