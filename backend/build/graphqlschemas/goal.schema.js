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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGoalInput = exports.CreateTaskInput = exports.Goal = void 0;
const type_graphql_1 = require("type-graphql");
const task_schema_1 = require("./task.schema");
let Goal = class Goal {
};
exports.Goal = Goal;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Goal.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Goal.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Goal.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], Goal.prototype, "Tags", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [task_schema_1.Task], { nullable: true }),
    __metadata("design:type", Array)
], Goal.prototype, "tasks", void 0);
exports.Goal = Goal = __decorate([
    (0, type_graphql_1.ObjectType)()
], Goal);
let CreateTaskInput = class CreateTaskInput {
};
exports.CreateTaskInput = CreateTaskInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTaskInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateTaskInput.prototype, "time", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], CreateTaskInput.prototype, "Tags", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTaskInput.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTaskInput.prototype, "Goal", void 0);
exports.CreateTaskInput = CreateTaskInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateTaskInput);
let CreateGoalInput = class CreateGoalInput {
};
exports.CreateGoalInput = CreateGoalInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateGoalInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateGoalInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], CreateGoalInput.prototype, "Tags", void 0);
exports.CreateGoalInput = CreateGoalInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateGoalInput);