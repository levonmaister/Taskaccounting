import { Ref, getModelForClass, prop } from "@typegoose/typegoose";
import { Task } from "./task.gooseschema";




export class Goal {
    @prop({required: true})
    public name!: string;

    @prop()
    public description!: string;

    @prop()
    public Tags: [];

    @prop({ref: ()=> Task})
    public tasks: Ref<Task>[];
}


export const GoalModel = getModelForClass(Goal);