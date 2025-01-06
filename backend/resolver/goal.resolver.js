"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
var type_graphql_1 = require("type-graphql");
var goal_schema_1 = require("../graphqlschemas/goal.schema");
var goal_service_1 = require("../service/goal.service");
var GoalResolver = function () {
    var _classDecorators = [(0, type_graphql_1.Resolver)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getGoals_decorators;
    var _createGoal_decorators;
    var GoalResolver = _classThis = /** @class */ (function () {
        function GoalResolver_1(goalService) {
            this.goalService = (__runInitializers(this, _instanceExtraInitializers), goalService);
            this.goalService = new goal_service_1.default();
        }
        GoalResolver_1.prototype.getGoals = function () {
            console.log('GET GOALS');
            return this.goalService.getGoals();
        };
        GoalResolver_1.prototype.createGoal = function (input) {
            console.log('CREATING GOAL: ', input);
            return this.goalService.createGoal(input);
        };
        return GoalResolver_1;
    }());
    __setFunctionName(_classThis, "GoalResolver");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getGoals_decorators = [(0, type_graphql_1.Query)(function () { return [goal_schema_1.Goal]; })];
        _createGoal_decorators = [(0, type_graphql_1.Mutation)(function () { return goal_schema_1.Goal; })];
        __esDecorate(_classThis, null, _getGoals_decorators, { kind: "method", name: "getGoals", static: false, private: false, access: { has: function (obj) { return "getGoals" in obj; }, get: function (obj) { return obj.getGoals; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createGoal_decorators, { kind: "method", name: "createGoal", static: false, private: false, access: { has: function (obj) { return "createGoal" in obj; }, get: function (obj) { return obj.createGoal; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GoalResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GoalResolver = _classThis;
}();
exports.default = GoalResolver;
