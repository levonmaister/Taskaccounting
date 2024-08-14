import { Field, ObjectType } from "type-graphql";



@ObjectType()
export class Task {

    @Field()
        id: string;

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

