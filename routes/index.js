const express=require('express');
const router=express.Router();

console.log('Router Loaded');

// It sends to Api 
router.use('/api',require('./api'));

module.exports=router;