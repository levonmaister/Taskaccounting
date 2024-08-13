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



} 


export default TaskService;