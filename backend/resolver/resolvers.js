"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var goal_resolver_1 = require("./goal.resolver");
var task_resolver_1 = require("./task.resolver");
var user_resolver_1 = require("./user.resolver");
exports.resolvers = [user_resolver_1.default, goal_resolver_1.default, task_resolver_1.default];
