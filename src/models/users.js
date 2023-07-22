const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true

    },
    About:{
        type:String,
        
    }
},
{timestamps:true}
);
const User=mongoose.model('User',UserSchema);
module.exports=User;