"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_gooseschema_1 = require("../gooseschemas/task.gooseschema");
const goal_gooseschema_1 = require("../gooseschemas/goal.gooseschema");
class TaskService {
    constructor() {
        this.getTasks = async () => {
            return task_gooseschema_1.TaskModel.find({});
        };
        this.changeTaskTime = async (id, time) => {
            const Task = task_gooseschema_1.TaskModel.findById(id);
            Task.time = time;
            const UpdatedTask = task_gooseschema_1.TaskModel.findByIdAndUpdate(id, Task, { new: true });
            return UpdatedTask;
        };
    }
    async createTask(input) {
        console.log(input);
        const NewTask = await task_gooseschema_1.TaskModel.create(input);
        console.log('TASKID: ', NewTask.id);
        const DesignatedGoal = await goal_gooseschema_1.GoalModel.findById(input.Goal);
        if (DesignatedGoal) {
            DesignatedGoal.tasks = DesignatedGoal.tasks.concat(NewTask._id);
            NewTask.Goal = DesignatedGoal.id;
            DesignatedGoal.save();
        }
        console.log('DESIGNATED GOAL: ', DesignatedGoal);
        console.log('CREATED TASK: ', NewTask);
        // CALL USER MODEL
        return NewTask;
    }
    async deleteTask(input) {
        // FINDING THE TASK & GOAL
        const TasktoDelete = await task_gooseschema_1.TaskModel.findById(input);
        const GoalId = TasktoDelete?.Goal;
        console.log('Deleting task id: ', input);
        //DELETION OF TASK
        if (TasktoDelete) {
            console.log('deleting: ', TasktoDelete);
            await TasktoDelete.deleteOne();
        }
        ;
        const Goal = await goal_gooseschema_1.GoalModel.findById(GoalId);
        if (Goal) {
            //UPDATING GOALS TASKLIST
            Goal.tasks = Goal?.tasks.filter(task => String(task) !== input);
            await Goal.save();
        }
    }
}
exports.default = TaskService;
