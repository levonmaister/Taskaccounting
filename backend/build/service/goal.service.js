"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const goal_gooseschema_1 = require("../gooseschemas/goal.gooseschema");
class GoalService {
    constructor() {
        this.getGoals = async () => {
            return goal_gooseschema_1.GoalModel.find({}).populate('tasks');
        };
    }
    async createGoal(input) {
        console.log(input);
        const NewGoal = goal_gooseschema_1.GoalModel.create(input);
        console.log(NewGoal);
        return NewGoal;
    }
}
exports.default = GoalService;
