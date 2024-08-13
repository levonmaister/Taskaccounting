"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_gooseschema_1 = require("../gooseschemas/task.gooseschema");
const goal_gooseschema_1 = require("../gooseschemas/goal.gooseschema");
class TaskService {
    constructor() {
        this.getTasks = async () => {
            return task_gooseschema_1.TaskModel.find({});
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
}
exports.default = TaskService;
