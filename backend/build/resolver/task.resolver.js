"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const task_service_1 = __importDefault(require("../service/task.service"));
const task_schema_1 = require("../graphqlschemas/task.schema");
const goal_schema_1 = require("../graphqlschemas/goal.schema");
let TaskResolver = class TaskResolver {
    constructor(taskService) {
        this.taskService = taskService;
        this.taskService = new task_service_1.default();
    }
    getTasks() {
        return this.taskService.getTasks();
    }
    createTask(input) {
        return this.taskService.createTask(input);
    }
    deleteTask(input) {
        this.taskService.deleteTask(input);
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [task_schema_1.Task]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskResolver.prototype, "getTasks", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => task_schema_1.Task),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [goal_schema_1.CreateTaskInput]),
    __metadata("design:returntype", void 0)
], TaskResolver.prototype, "createTask", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaskResolver.prototype, "deleteTask", null);
TaskResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [task_service_1.default])
], TaskResolver);
exports.default = TaskResolver;
