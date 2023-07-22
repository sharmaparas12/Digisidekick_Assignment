const Userservice=require('../services/user_service');
const userservice=new Userservice();
const {response}=require('express');



const Adduser=async (req,res) => {
    try {
        const response=await userservice.create(req.body);
        return res.status(200).json({
            message:'User created Sucessfuly',
            data:response,
            status:true,
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'something went wrong in controllers',
            data:{},
            status:false,
            err:error
        });
        
    }
}

const Removeuser=async (req,res) => {
    try {
        const response=await userservice.create(req.body);
        return res.status(200).json({
            message:'User created Sucessfuly',
            data:response,
            status:true,
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'something went wrong in controllers',
            data:{},
            status:false,
            err:error
        });
        
    }
}







module.exports={
    Adduser,
    Removeuser,
   
   
}
