import { Field, InputType, ObjectType } from "type-graphql";
import { Task } from "./task.schema";


@ObjectType()
export class Goal {
    @Field()
        _id: string;

    @Field()
        name: string;

    @Field()
        description: string;

    @Field(() => [String], {nullable: true})
        Tags: (String | null )[];

    @Field(()=> [Task],{nullable: true})
        tasks: Task[];
}



@InputType()
    export class CreateTaskInput{
        @Field()
        name: string;


        @Field()
        time: number;

        @Field(() => [String], {nullable: true})
        Tags?: (string | null )[]

        @Field()
        date: string;

        @Field()
        Goal: string;

    }



@InputType()
export class CreateGoalInput{
    @Field()
        name: string;

    @Field()
        description: string;

    @Field(() => [String], {nullable: true})
        Tags?: (String | null )[];

}