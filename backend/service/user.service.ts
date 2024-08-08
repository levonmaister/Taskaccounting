import { UserModel } from "../graphqlschemas/user.schema";

 


class UserService {

    async createUser(input: any)
{
// CALL USER MODEL
return UserModel.create(input)
}



} 




export default UserService;