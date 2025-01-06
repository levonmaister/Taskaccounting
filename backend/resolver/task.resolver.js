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
var task_service_1 = require("../service/task.service");
var task_schema_1 = require("../graphqlschemas/task.schema");
var TaskResolver = function () {
    var _classDecorators = [(0, type_graphql_1.Resolver)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getTasks_decorators;
    var _createTask_decorators;
    var _deleteTask_decorators;
    var _changeTaskTime_decorators;
    var _changeTaskName_decorators;
    var TaskResolver = _classThis = /** @class */ (function () {
        function TaskResolver_1(taskService) {
            this.taskService = (__runInitializers(this, _instanceExtraInitializers), taskService);
            this.taskService = new task_service_1.default();
        }
        TaskResolver_1.prototype.getTasks = function () {
            return this.taskService.getTasks();
        };
        TaskResolver_1.prototype.createTask = function (input) {
            return this.taskService.createTask(input);
        };
        TaskResolver_1.prototype.deleteTask = function (input) {
            this.taskService.deleteTask(input);
            return true;
        };
        TaskResolver_1.prototype.changeTaskTime = function (id, time) {
            return this.taskService.changeTaskTime(id, time);
        };
        TaskResolver_1.prototype.changeTaskName = function (id, name) {
            return this.taskService.changeTaskName(id, name);
        };
        return TaskResolver_1;
    }());
    __setFunctionName(_classThis, "TaskResolver");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getTasks_decorators = [(0, type_graphql_1.Query)(function () { return [task_schema_1.Task]; })];
        _createTask_decorators = [(0, type_graphql_1.Mutation)(function () { return task_schema_1.Task; })];
        _deleteTask_decorators = [(0, type_graphql_1.Mutation)(function () { return Boolean; })];
        _changeTaskTime_decorators = [(0, type_graphql_1.Mutation)(function () { return task_schema_1.Task; })];
        _changeTaskName_decorators = [(0, type_graphql_1.Mutation)(function () { return task_schema_1.Task; })];
        __esDecorate(_classThis, null, _getTasks_decorators, { kind: "method", name: "getTasks", static: false, private: false, access: { has: function (obj) { return "getTasks" in obj; }, get: function (obj) { return obj.getTasks; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createTask_decorators, { kind: "method", name: "createTask", static: false, private: false, access: { has: function (obj) { return "createTask" in obj; }, get: function (obj) { return obj.createTask; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteTask_decorators, { kind: "method", name: "deleteTask", static: false, private: false, access: { has: function (obj) { return "deleteTask" in obj; }, get: function (obj) { return obj.deleteTask; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _changeTaskTime_decorators, { kind: "method", name: "changeTaskTime", static: false, private: false, access: { has: function (obj) { return "changeTaskTime" in obj; }, get: function (obj) { return obj.changeTaskTime; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _changeTaskName_decorators, { kind: "method", name: "changeTaskName", static: false, private: false, access: { has: function (obj) { return "changeTaskName" in obj; }, get: function (obj) { return obj.changeTaskName; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TaskResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TaskResolver = _classThis;
}();
exports.default = TaskResolver;
