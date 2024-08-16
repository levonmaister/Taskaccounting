import { Arg, Mutation, Query, Resolver } from "type-graphql";
import TaskService from "../service/task.service";
import { Task } from "../graphqlschemas/task.schema";
import { CreateTaskInput } from "../graphqlschemas/goal.schema";






@Resolver()
export default class TaskResolver{

    constructor(private  taskService: TaskService){
        this.taskService = new TaskService();
    }
    
    @Query(() =>[Task])
    getTasks(){
        return this.taskService.getTasks();
    }


    @Mutation(()=>Task)
    createTask(@Arg('input') input: CreateTaskInput){
        return this.taskService.createTask(input)
    }
    
    @Mutation(()=>Boolean)
    deleteTask(@Arg('input') input: string){
        this.taskService.deleteTask(input)
        return true;
    }

    @Mutation(()=>Task)
    changeTaskTime(@Arg('id') id: string, @Arg('time') time: number){
       return this.taskService.changeTaskTime(id, time);
    }

    @Mutation(()=>Task)
    changeTaskName(@Arg('id') id: string, @Arg('name') name: string){
       return this.taskService.changeTaskName(id, name);
    }
   
}
