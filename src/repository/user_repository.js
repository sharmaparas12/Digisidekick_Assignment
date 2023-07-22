const Users=require('../models/users');

class UsersRepository{

    async create(data){
        try {
            console.log(data);
            const user=await Users.create(data);
            return user
            
        } catch (error) {
            console.log("error in repository layer");
            throw{error};
            
        }
    }
    async get(){
        try {
            
            const user=await Users.find();
            return user
            
        } catch (error) {
            console.log("error in repository layer");
            throw{error};
            
        }
    }
    async update(userId,data){
        try {
            
           const user=await Users.findByIdAndUpdate(userId,data);
           return user;
            
        } catch (error) {
            console.log("error in repository layer");
            throw{error};
            
        }
    }



}

module.exports=UsersRepository;