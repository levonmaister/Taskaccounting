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
exports.TaskModel = exports.Task = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var Task = function () {
    var _a;
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
    return _a = /** @class */ (function () {
            function Task() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.time = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _time_initializers, void 0));
                this.Tags = (__runInitializers(this, _time_extraInitializers), __runInitializers(this, _Tags_initializers, void 0));
                this.date = (__runInitializers(this, _Tags_extraInitializers), __runInitializers(this, _date_initializers, void 0));
                this.Goal = (__runInitializers(this, _date_extraInitializers), __runInitializers(this, _Goal_initializers, void 0));
                __runInitializers(this, _Goal_extraInitializers);
            }
            return Task;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, typegoose_1.prop)()];
            _time_decorators = [(0, typegoose_1.prop)()];
            _Tags_decorators = [(0, typegoose_1.prop)()];
            _date_decorators = [(0, typegoose_1.prop)()];
            _Goal_decorators = [(0, typegoose_1.prop)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _time_decorators, { kind: "field", name: "time", static: false, private: false, access: { has: function (obj) { return "time" in obj; }, get: function (obj) { return obj.time; }, set: function (obj, value) { obj.time = value; } }, metadata: _metadata }, _time_initializers, _time_extraInitializers);
            __esDecorate(null, null, _Tags_decorators, { kind: "field", name: "Tags", static: false, private: false, access: { has: function (obj) { return "Tags" in obj; }, get: function (obj) { return obj.Tags; }, set: function (obj, value) { obj.Tags = value; } }, metadata: _metadata }, _Tags_initializers, _Tags_extraInitializers);
            __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: function (obj) { return "date" in obj; }, get: function (obj) { return obj.date; }, set: function (obj, value) { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
            __esDecorate(null, null, _Goal_decorators, { kind: "field", name: "Goal", static: false, private: false, access: { has: function (obj) { return "Goal" in obj; }, get: function (obj) { return obj.Goal; }, set: function (obj, value) { obj.Goal = value; } }, metadata: _metadata }, _Goal_initializers, _Goal_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.Task = Task;
exports.TaskModel = (0, typegoose_1.getModelForClass)(Task);
