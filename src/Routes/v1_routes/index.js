const express=require('express');
const router=express.Router();
const usercontroller=require('../../controllers/user_controller');






router.post('/adduser',usercontroller.Adduser);









module.exports=router;