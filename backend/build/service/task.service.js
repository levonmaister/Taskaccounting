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
        const NewTask = task_gooseschema_1.TaskModel.create(input);
        const DesignatedGoal = goal_gooseschema_1.GoalModel.findById(input.Goal);
        console.log('DESIGNATED GOAL: ', DesignatedGoal);
        console.log('CREATED TASK: ', NewTask);
        // CALL USER MODEL
        return NewTask;
    }
}
exports.default = TaskService;
