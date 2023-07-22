const express=require('express');
const v1apiroutes=require('./v1_routes/index');
const router=express.Router();

router.use('/v1',v1apiroutes);
module.exports=router;