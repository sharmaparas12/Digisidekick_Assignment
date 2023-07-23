const express=require('express');
const router=express.Router();
const usercontroller=require('../../controllers/user_controller');






router.post('/adduser',usercontroller.Adduser);




router.get('/users',usercontroller.getalluser);



router.patch('/users/:id',usercontroller.update);




router.delete('/users/:id',usercontroller.destroy);









module.exports=router;