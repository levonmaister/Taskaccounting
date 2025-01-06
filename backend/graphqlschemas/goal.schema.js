"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGoalInput = exports.CreateTaskInput = exports.Goal = void 0;
var type_graphql_1 = require("type-graphql");
var task_schema_1 = require("./task.schema");
var Goal = function () {
    var _classDecorators = [(0, type_graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var __id_decorators;
    var __id_initializers = [];
    var __id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _Tags_decorators;
    var _Tags_initializers = [];
    var _Tags_extraInitializers = [];
    var _tasks_decorators;
    var _tasks_initializers = [];
    var _tasks_extraInitializers = [];
    var Goal = _classThis = /** @class */ (function () {
        function Goal_1() {
            this._id = __runInitializers(this, __id_initializers, void 0);
            this.name = (__runInitializers(this, __id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.description = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.Tags = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _Tags_initializers, void 0));
            this.tasks = (__runInitializers(this, _Tags_extraInitializers), __runInitializers(this, _tasks_initializers, void 0));
            __runInitializers(this, _tasks_extraInitializers);
        }
        return Goal_1;
    }());
    __setFunctionName(_classThis, "Goal");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __id_decorators = [(0, type_graphql_1.Field)()];
        _name_decorators = [(0, type_graphql_1.Field)()];
        _description_decorators = [(0, type_graphql_1.Field)()];
        _Tags_decorators = [(0, type_graphql_1.Field)(function () { return [String]; }, { nullable: true })];
        _tasks_decorators = [(0, type_graphql_1.Field)(function () { return [task_schema_1.Task]; }, { nullable: true })];
        __esDecorate(null, null, __id_decorators, { kind: "field", name: "_id", static: false, private: false, access: { has: function (obj) { return "_id" in obj; }, get: function (obj) { return obj._id; }, set: function (obj, value) { obj._id = value; } }, metadata: _metadata }, __id_initializers, __id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _Tags_decorators, { kind: "field", name: "Tags", static: false, private: false, access: { has: function (obj) { return "Tags" in obj; }, get: function (obj) { return obj.Tags; }, set: function (obj, value) { obj.Tags = value; } }, metadata: _metadata }, _Tags_initializers, _Tags_extraInitializers);
        __esDecorate(null, null, _tasks_decorators, { kind: "field", name: "tasks", static: false, private: false, access: { has: function (obj) { return "tasks" in obj; }, get: function (obj) { return obj.tasks; }, set: function (obj, value) { obj.tasks = value; } }, metadata: _metadata }, _tasks_initializers, _tasks_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Goal = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Goal = _classThis;
}();
exports.Goal = Goal;
var CreateTaskInput = function () {
    var _classDecorators = [(0, type_graphql_1.InputType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _time_decorators;
    var _time_initializers = [];
    var _time_extraInitializers = [];
    var _Tags_decorators;
    var _Tags_initializers = [];
    var _Tags_extraInitializers = [];
    var _date_decorators;
    var _date_initializers = [];
    var _date_extraInitializers = [];
    var _Goal_decorators;
    var _Goal_initializers = [];
    var _Goal_extraInitializers = [];
    var CreateTaskInput = _classThis = /** @class */ (function () {
        function CreateTaskInput_1() {
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.time = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _time_initializers, void 0));
            this.Tags = (__runInitializers(this, _time_extraInitializers), __runInitializers(this, _Tags_initializers, void 0));
            this.date = (__runInitializers(this, _Tags_extraInitializers), __runInitializers(this, _date_initializers, void 0));
            this.Goal = (__runInitializers(this, _date_extraInitializers), __runInitializers(this, _Goal_initializers, void 0));
            __runInitializers(this, _Goal_extraInitializers);
        }
        return CreateTaskInput_1;
    }());
    __setFunctionName(_classThis, "CreateTaskInput");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _name_decorators = [(0, type_graphql_1.Field)()];
        _time_decorators = [(0, type_graphql_1.Field)()];
        _Tags_decorators = [(0, type_graphql_1.Field)(function () { return [String]; }, { nullable: true })];
        _date_decorators = [(0, type_graphql_1.Field)()];
        _Goal_decorators = [(0, type_graphql_1.Field)()];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _time_decorators, { kind: "field", name: "time", static: false, private: false, access: { has: function (obj) { return "time" in obj; }, get: function (obj) { return obj.time; }, set: function (obj, value) { obj.time = value; } }, metadata: _metadata }, _time_initializers, _time_extraInitializers);
        __esDecorate(null, null, _Tags_decorators, { kind: "field", name: "Tags", static: false, private: false, access: { has: function (obj) { return "Tags" in obj; }, get: function (obj) { return obj.Tags; }, set: function (obj, value) { obj.Tags = value; } }, metadata: _metadata }, _Tags_initializers, _Tags_extraInitializers);
        __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: function (obj) { return "date" in obj; }, get: function (obj) { return obj.date; }, set: function (obj, value) { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
        __esDecorate(null, null, _Goal_decorators, { kind: "field", name: "Goal", static: false, private: false, access: { has: function (obj) { return "Goal" in obj; }, get: function (obj) { return obj.Goal; }, set: function (obj, value) { obj.Goal = value; } }, metadata: _metadata }, _Goal_initializers, _Goal_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CreateTaskInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CreateTaskInput = _classThis;
}();
exports.CreateTaskInput = CreateTaskInput;
var CreateGoalInput = function () {
    var _classDecorators = [(0, type_graphql_1.InputType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _Tags_decorators;
    var _Tags_initializers = [];
    var _Tags_extraInitializers = [];
    var CreateGoalInput = _classThis = /** @class */ (function () {
        function CreateGoalInput_1() {
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.description = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.Tags = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _Tags_initializers, void 0));
            __runInitializers(this, _Tags_extraInitializers);
        }
        return CreateGoalInput_1;
    }());
    __setFunctionName(_classThis, "CreateGoalInput");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _name_decorators = [(0, type_graphql_1.Field)()];
        _description_decorators = [(0, type_graphql_1.Field)()];
        _Tags_decorators = [(0, type_graphql_1.Field)(function () { return [String]; }, { nullable: true })];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _Tags_decorators, { kind: "field", name: "Tags", static: false, private: false, access: { has: function (obj) { return "Tags" in obj; }, get: function (obj) { return obj.Tags; }, set: function (obj, value) { obj.Tags = value; } }, metadata: _metadata }, _Tags_initializers, _Tags_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CreateGoalInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CreateGoalInput = _classThis;
}();
exports.CreateGoalInput = CreateGoalInput;
