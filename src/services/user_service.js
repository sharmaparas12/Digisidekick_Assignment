const UserRepository=require('../repository/user_repository');

class Userservice{
    constructor()
    {
        this.userRepository=new UserRepository();
    }
    async create(data){
        try {
            const user=await this.userRepository.create(data);
            return user
            
        } catch (error) {
            console.log("error in service layer");
            throw{error};
        }
    }
    async get(){
        try {
            const user=await this.userRepository.get();
            return user
            
        } catch (error) {
            console.log("error in service layer");
            throw{error};
        }
    }
    
    async update(userId,data){
        try {
            const user=await this.userRepository.update(userId,data);
            return user
            
        } catch (error) {
            console.log("error in service layer");
            throw{error};
        }
    }
   

}
module.exports=Userservice;