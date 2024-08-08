import { getModelForClass} from "@typegoose/typegoose";
import { Field, InputType, ObjectType } from "type-graphql";




@ObjectType()
export class User {

    @Field(()=> String)
        id: string


    @Field(()=> String)
        username: string


    @Field(()=> String)
        password: string
}


export const UserModel = getModelForClass(User);



@InputType()
export class CreateUserInput{
    @Field(()=> String)
    username: string


    @Field(()=> String)
    password: string

}


@InputType()
export class LoginInput{
    @Field(()=> String)
    username: string

    @Field(()=> String)
    password: string
}
