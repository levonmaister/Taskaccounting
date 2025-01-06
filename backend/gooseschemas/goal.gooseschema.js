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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalModel = exports.Goal = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var task_gooseschema_1 = require("./task.gooseschema");
var Goal = function () {
    var _a;
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
    return _a = /** @class */ (function () {
            function Goal() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.description = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.Tags = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _Tags_initializers, void 0));
                this.tasks = (__runInitializers(this, _Tags_extraInitializers), __runInitializers(this, _tasks_initializers, void 0));
                __runInitializers(this, _tasks_extraInitializers);
            }
            return Goal;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, typegoose_1.prop)({ required: true })];
            _description_decorators = [(0, typegoose_1.prop)()];
            _Tags_decorators = [(0, typegoose_1.prop)()];
            _tasks_decorators = [(0, typegoose_1.prop)({ ref: function () { return task_gooseschema_1.Task; } })];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _Tags_decorators, { kind: "field", name: "Tags", static: false, private: false, access: { has: function (obj) { return "Tags" in obj; }, get: function (obj) { return obj.Tags; }, set: function (obj, value) { obj.Tags = value; } }, metadata: _metadata }, _Tags_initializers, _Tags_extraInitializers);
            __esDecorate(null, null, _tasks_decorators, { kind: "field", name: "tasks", static: false, private: false, access: { has: function (obj) { return "tasks" in obj; }, get: function (obj) { return obj.tasks; }, set: function (obj, value) { obj.tasks = value; } }, metadata: _metadata }, _tasks_initializers, _tasks_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.Goal = Goal;
exports.GoalModel = (0, typegoose_1.getModelForClass)(Goal);
