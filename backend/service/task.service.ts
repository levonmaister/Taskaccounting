import { TaskModel } from "../gooseschemas/task.gooseschema";
import { GoalModel } from "../gooseschemas/goal.gooseschema";


class TaskService {

    async createTask(input: any)
{
    console.log(input);

    const NewTask = await TaskModel.create(input);
    console.log('TASKID: ', NewTask.id);
    const DesignatedGoal = await GoalModel.findById(input.Goal);

    if(DesignatedGoal){
    DesignatedGoal.tasks = DesignatedGoal.tasks.concat(NewTask._id);
    NewTask.Goal = DesignatedGoal.id;
    DesignatedGoal.save();
    }

    console.log('DESIGNATED GOAL: ', DesignatedGoal);

    console.log('CREATED TASK: ', NewTask);
// CALL USER MODEL
return NewTask
}

 getTasks = async() => {
    return TaskModel.find({});
}


 async deleteTask (input: string){

// FINDING THE TASK & GOAL
    const TasktoDelete = await TaskModel.findById(input);

    const GoalId = TasktoDelete?.Goal;

    console.log('Deleting task id: ', input)

//DELETION OF TASK
    if(TasktoDelete){
       console.log('deleting: ', TasktoDelete);
       await TasktoDelete.deleteOne();
    };

    const Goal = await GoalModel.findById(GoalId)
    
if(Goal){
    //UPDATING GOALS TASKLIST
    Goal.tasks = Goal?.tasks.filter(task  => String(task) !== input)
    await Goal.save();
}

}


changeTaskTime = async(id: string, time: number) => {


    const Task = await TaskModel.findById(id);
    console.log('UPDATING' , Task , "with time: " , time)
    if(Task){
    Task.time = time;
            
    const UpdatedTask = await TaskModel.findByIdAndUpdate(id,Task,{new:true});


    return UpdatedTask;
        }

    return null;
}

changeTaskName = async(id: string, name: string) => {


    const Task = await TaskModel.findById(id);
    console.log('UPDATING' , Task , "with time: " , name)
    if(Task){
    Task.name = name;
            
    const UpdatedTask = await TaskModel.findByIdAndUpdate(id,Task,{new:true});


    return UpdatedTask;
        }

    return null;
}

} 


export default TaskService;