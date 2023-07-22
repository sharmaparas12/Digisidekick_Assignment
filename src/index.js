const express=require('express');
const connect=require('./config/database');
const app=express();
const User=require('./models/users');
app.listen(3045,async ()  => {
    console.log("server started");
    await connect();
    console.log("Mongo db connected");
    const user=await User.create({Name:'Paras',userEmail:"ps88383@gmail.co",password:"29393"});
    console.log(user);
    // const tweet=await Tweet.findOne({userEmail:'parassharma2023@gmail.com'});
    //const tweets=Tweet.find();


});