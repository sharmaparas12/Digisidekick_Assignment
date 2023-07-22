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
    
   

}
module.exports=Userservice;