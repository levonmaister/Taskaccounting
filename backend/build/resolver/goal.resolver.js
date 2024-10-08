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
const goal_schema_1 = require("../graphqlschemas/goal.schema");
const goal_schema_2 = require("../graphqlschemas/goal.schema");
const goal_service_1 = __importDefault(require("../service/goal.service"));
let GoalResolver = class GoalResolver {
    constructor(goalService) {
        this.goalService = goalService;
        this.goalService = new goal_service_1.default();
    }
    getGoals() {
        console.log('GET GOALS');
        return this.goalService.getGoals();
    }
    createGoal(input) {
        console.log('CREATING GOAL: ', input);
        return this.goalService.createGoal(input);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [goal_schema_2.Goal]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoalResolver.prototype, "getGoals", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => goal_schema_2.Goal),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [goal_schema_1.CreateGoalInput]),
    __metadata("design:returntype", void 0)
], GoalResolver.prototype, "createGoal", null);
GoalResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [goal_service_1.default])
], GoalResolver);
exports.default = GoalResolver;
