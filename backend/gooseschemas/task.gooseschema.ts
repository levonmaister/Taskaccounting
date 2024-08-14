import { Ref, getModelForClass, prop } from "@typegoose/typegoose";
import { Goal } from "./goal.gooseschema";


export class Task {

    @prop()
        name: string;

    @prop()
        time: number;

    @prop()
        Tags?: []

    @prop()
    date: string;

    @prop()
    public Goal: Ref<Goal>;
}


export const TaskModel = getModelForClass(Task);