const mongoose=require('mongoose');
const connect=async () => {
    await mongoose.connect('mongodb://localhost/users_database');
}
module.exports=connect;