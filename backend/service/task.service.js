"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var task_gooseschema_1 = require("../gooseschemas/task.gooseschema");
var goal_gooseschema_1 = require("../gooseschemas/goal.gooseschema");
var TaskService = /** @class */ (function () {
    function TaskService() {
        var _this = this;
        this.getTasks = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, task_gooseschema_1.TaskModel.find({})];
            });
        }); };
        this.changeTaskTime = function (id, time) { return __awaiter(_this, void 0, void 0, function () {
            var Task, UpdatedTask;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, task_gooseschema_1.TaskModel.findById(id)];
                    case 1:
                        Task = _a.sent();
                        console.log('UPDATING', Task, "with time: ", time);
                        if (!Task) return [3 /*break*/, 3];
                        Task.time = time;
                        return [4 /*yield*/, task_gooseschema_1.TaskModel.findByIdAndUpdate(id, Task, { new: true })];
                    case 2:
                        UpdatedTask = _a.sent();
                        return [2 /*return*/, UpdatedTask];
                    case 3: return [2 /*return*/, null];
                }
            });
        }); };
        this.changeTaskName = function (id, name) { return __awaiter(_this, void 0, void 0, function () {
            var Task, UpdatedTask;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, task_gooseschema_1.TaskModel.findById(id)];
                    case 1:
                        Task = _a.sent();
                        console.log('UPDATING', Task, "with time: ", name);
                        if (!Task) return [3 /*break*/, 3];
                        Task.name = name;
                        return [4 /*yield*/, task_gooseschema_1.TaskModel.findByIdAndUpdate(id, Task, { new: true })];
                    case 2:
                        UpdatedTask = _a.sent();
                        return [2 /*return*/, UpdatedTask];
                    case 3: return [2 /*return*/, null];
                }
            });
        }); };
    }
    TaskService.prototype.createTask = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var NewTask, DesignatedGoal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(input);
                        return [4 /*yield*/, task_gooseschema_1.TaskModel.create(input)];
                    case 1:
                        NewTask = _a.sent();
                        console.log('TASKID: ', NewTask.id);
                        return [4 /*yield*/, goal_gooseschema_1.GoalModel.findById(input.Goal)];
                    case 2:
                        DesignatedGoal = _a.sent();
                        if (DesignatedGoal) {
                            DesignatedGoal.tasks = DesignatedGoal.tasks.concat(NewTask._id);
                            NewTask.Goal = DesignatedGoal.id;
                            DesignatedGoal.save();
                        }
                        console.log('DESIGNATED GOAL: ', DesignatedGoal);
                        console.log('CREATED TASK: ', NewTask);
                        // CALL USER MODEL
                        return [2 /*return*/, NewTask];
                }
            });
        });
    };
    TaskService.prototype.deleteTask = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var TasktoDelete, GoalId, Goal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, task_gooseschema_1.TaskModel.findById(input)];
                    case 1:
                        TasktoDelete = _a.sent();
                        GoalId = TasktoDelete === null || TasktoDelete === void 0 ? void 0 : TasktoDelete.Goal;
                        console.log('Deleting task id: ', input);
                        if (!TasktoDelete) return [3 /*break*/, 3];
                        console.log('deleting: ', TasktoDelete);
                        return [4 /*yield*/, TasktoDelete.deleteOne()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        ;
                        return [4 /*yield*/, goal_gooseschema_1.GoalModel.findById(GoalId)];
                    case 4:
                        Goal = _a.sent();
                        if (!Goal) return [3 /*break*/, 6];
                        //UPDATING GOALS TASKLIST
                        Goal.tasks = Goal === null || Goal === void 0 ? void 0 : Goal.tasks.filter(function (task) { return String(task) !== input; });
                        return [4 /*yield*/, Goal.save()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return TaskService;
}());
exports.default = TaskService;
