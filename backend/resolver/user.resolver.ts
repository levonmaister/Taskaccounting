import { Arg, Mutation, Resolver } from "type-graphql";
import { CreateUserInput , User } from "../graphqlschemas/user.schema";
import UserService from "../service/user.service";



@Resolver()
export default class UserResolver{

    constructor(private  userService: UserService){
        this.userService = new UserService();
    }



    @Mutation(()=>User)
    createUser(@Arg('input') input: CreateUserInput){
        return this.userService.createUser(input)
    }

    
 
   
}