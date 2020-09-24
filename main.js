(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _todos_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos/todo-list/todo-list.component */ "./src/app/todos/todo-list/todo-list.component.ts");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, consts: [[1, "todos"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "todo-list", 0);
    } }, directives: [_todos_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__["TodoListComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .todos[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAudG9kb3Mge1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _todos_todos_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos/todos.module */ "./src/app/todos/todos.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _todos_todos_module__WEBPACK_IMPORTED_MODULE_2__["TodosModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _todos_todos_module__WEBPACK_IMPORTED_MODULE_2__["TodosModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _todos_todos_module__WEBPACK_IMPORTED_MODULE_2__["TodosModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.service */ "./src/app/store/store.service.ts");
/* harmony import */ var _todos_todo_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos/todo-store.service */ "./src/app/store/todos/todo-store.service.ts");
/* harmony import */ var _todos_todo_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos/todo-client.service */ "./src/app/store/todos/todo-client.service.ts");







class StoreModule {
}
StoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StoreModule });
StoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StoreModule_Factory(t) { return new (t || StoreModule)(); }, providers: [_todos_todo_client_service__WEBPACK_IMPORTED_MODULE_5__["TodoClientService"], _todos_todo_store_service__WEBPACK_IMPORTED_MODULE_4__["TodoStoreService"], _store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
                providers: [_todos_todo_client_service__WEBPACK_IMPORTED_MODULE_5__["TodoClientService"], _todos_todo_store_service__WEBPACK_IMPORTED_MODULE_4__["TodoStoreService"], _store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/store/store.service.ts":
/*!****************************************!*\
  !*** ./src/app/store/store.service.ts ***!
  \****************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _todos_todo_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos/todo-store.service */ "./src/app/store/todos/todo-store.service.ts");



class StoreService {
    constructor(_todoStore) {
        this._todoStore = _todoStore;
        this._todoStore.addTodos();
    }
    get todos$() {
        return this._todoStore.todos$;
    }
    addTodo(title) {
        this._todoStore.addTodo(title);
    }
    editTodo(id, title) {
        this._todoStore.editTodo(id, title);
    }
    removeTodo(id) {
        this._todoStore.removeTodo(id);
    }
    setCompleted(id, isDone) {
        this._todoStore.setCompleted(id, isDone);
    }
}
StoreService.ɵfac = function StoreService_Factory(t) { return new (t || StoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_todos_todo_store_service__WEBPACK_IMPORTED_MODULE_1__["TodoStoreService"])); };
StoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StoreService, factory: StoreService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _todos_todo_store_service__WEBPACK_IMPORTED_MODULE_1__["TodoStoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/todos/todo-client.service.ts":
/*!****************************************************!*\
  !*** ./src/app/store/todos/todo-client.service.ts ***!
  \****************************************************/
/*! exports provided: TodoClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoClientService", function() { return TodoClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class TodoClientService {
    constructor(http) {
        this.http = http;
    }
    fetchTodos() {
        return this.http.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
    }
    deleteTodo(id) {
        return this.http.delete('https://jsonplaceholder.typicode.com/todos/' + id);
    }
    addTodo(payload) {
        return this.http.post('https://jsonplaceholder.typicode.com/todos', payload);
    }
    updateTodo(payload, id) {
        return this.http.put('https://jsonplaceholder.typicode.com/todos/' + id, payload);
    }
}
TodoClientService.ɵfac = function TodoClientService_Factory(t) { return new (t || TodoClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TodoClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoClientService, factory: TodoClientService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/todos/todo-store.service.ts":
/*!***************************************************!*\
  !*** ./src/app/store/todos/todo-store.service.ts ***!
  \***************************************************/
/*! exports provided: TodoStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoStoreService", function() { return TodoStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _todo_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-client.service */ "./src/app/store/todos/todo-client.service.ts");





class TodoStoreService {
    constructor(_todoClient) {
        this._todoClient = _todoClient;
        this._todos = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.todos$ = this._todos.asObservable();
        this.completedTodos$ = this.todos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((todos) => todos.filter((todo) => todo.completed)));
    }
    get todos() {
        return this._todos.getValue();
    }
    set todos(val) {
        this._todos.next(val);
    }
    addTodo(title) {
        const newTodo = { id: new Date().getTime(), title, completed: false };
        this._todoClient.addTodo(newTodo).subscribe((_) => {
            this.todos = [...this.todos, newTodo];
        });
    }
    addTodos() {
        this._todoClient.fetchTodos().subscribe((todos) => {
            this.todos = [...this.todos, ...todos];
        });
    }
    editTodo(id, title) {
        let todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            const index = this.todos.indexOf(todo);
            const updatedTodo = Object.assign(Object.assign({}, todo), { title });
            this._todoClient.updateTodo(updatedTodo, id).subscribe((_) => {
                this.todos[index] = updatedTodo;
                this.todos = [...this.todos];
            }, (err) => {
                // do this because jsonplacholder doesn't acutely create resources
                this.todos[index] = updatedTodo;
                this.todos = [...this.todos];
            });
        }
    }
    removeTodo(id) {
        this._todoClient.deleteTodo(id).subscribe((_) => {
            this.todos = this.todos.filter((todo) => todo.id !== id);
        });
    }
    setCompleted(id, isDone) {
        let todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            const index = this.todos.indexOf(todo);
            const updatedTodo = Object.assign(Object.assign({}, todo), { completed: isDone });
            this._todoClient.updateTodo(updatedTodo, id).subscribe((_) => {
                this.todos[index] = updatedTodo;
                this.todos = [...this.todos];
            }, (err) => {
                // do this because jsonplacholder doesn't acutely create resources
                this.todos[index] = updatedTodo;
                this.todos = [...this.todos];
            });
        }
    }
}
TodoStoreService.ɵfac = function TodoStoreService_Factory(t) { return new (t || TodoStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_todo_client_service__WEBPACK_IMPORTED_MODULE_3__["TodoClientService"])); };
TodoStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoStoreService, factory: TodoStoreService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _todo_client_service__WEBPACK_IMPORTED_MODULE_3__["TodoClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/todos/todo-action.directive.ts":
/*!************************************************!*\
  !*** ./src/app/todos/todo-action.directive.ts ***!
  \************************************************/
/*! exports provided: TodoActionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoActionDirective", function() { return TodoActionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/store.service */ "./src/app/store/store.service.ts");



class TodoActionDirective {
    constructor(_storeService) {
        this._storeService = _storeService;
    }
    onEditNotify($event) {
        this._storeService.editTodo($event === null || $event === void 0 ? void 0 : $event.id, $event === null || $event === void 0 ? void 0 : $event.title);
    }
    onCheckedNotify($event) {
        this._storeService.setCompleted($event === null || $event === void 0 ? void 0 : $event.id, !($event === null || $event === void 0 ? void 0 : $event.completed));
    }
    onDeleteNotify($event) {
        this._storeService.removeTodo($event === null || $event === void 0 ? void 0 : $event.id);
    }
}
TodoActionDirective.ɵfac = function TodoActionDirective_Factory(t) { return new (t || TodoActionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"])); };
TodoActionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TodoActionDirective, selectors: [["", "appTodoAction", ""]], hostBindings: function TodoActionDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("editNotify", function TodoActionDirective_editNotify_HostBindingHandler($event) { return ctx.onEditNotify($event); })("checkedNotify", function TodoActionDirective_checkedNotify_HostBindingHandler($event) { return ctx.onCheckedNotify($event); })("deleteNotify", function TodoActionDirective_deleteNotify_HostBindingHandler($event) { return ctx.onDeleteNotify($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoActionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appTodoAction]',
            }]
    }], function () { return [{ type: src_app_store_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"] }]; }, { onEditNotify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['editNotify', ['$event']]
        }], onCheckedNotify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['checkedNotify', ['$event']]
        }], onDeleteNotify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['deleteNotify', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/todos/todo-day/todo-day.component.ts":
/*!******************************************************!*\
  !*** ./src/app/todos/todo-day/todo-day.component.ts ***!
  \******************************************************/
/*! exports provided: TodoDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDayComponent", function() { return TodoDayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class TodoDayComponent {
    constructor() {
        this.dayTimestamp = new Date().getTime();
    }
}
TodoDayComponent.ɵfac = function TodoDayComponent_Factory(t) { return new (t || TodoDayComponent)(); };
TodoDayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoDayComponent, selectors: [["app-todo-day"]], inputs: { dayTimestamp: "dayTimestamp" }, decls: 16, vars: 18, consts: [[1, "todo-day"], [1, "todo-day-full"], [1, "todo-day-number"], [1, "todo-day-my"], [1, "todo-day-m"], [1, "todo-day-y"], [1, "todo-day-week"]], template: function TodoDayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 4, ctx.dayTimestamp, "dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, ctx.dayTimestamp, "MMM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 10, ctx.dayTimestamp, "yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 15, ctx.dayTimestamp, "EEE")));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  color: var(--text-secondary);\n}\n[_nghost-%COMP%]   .todo-day[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n[_nghost-%COMP%]   .todo-day-full[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .todo-day-number[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\nhtml[dir=rtl]   [_nghost-%COMP%]   .todo-day-number[_ngcontent-%COMP%] {\n  margin-left: 0.2em;\n}\nhtml[dir=ltr]   [_nghost-%COMP%]   .todo-day-number[_ngcontent-%COMP%] {\n  margin-right: 0.2em;\n}\n[_nghost-%COMP%]   .todo-day-my[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby1kYXkvdG9kby1kYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtBQUdOO0FBREk7RUFDRSxjQUFBO0FBR047QUFGTTtFQUNFLGtCQUFBO0FBSVI7QUFGTTtFQUNFLG1CQUFBO0FBSVI7QUFESTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFHTiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8tZGF5L3RvZG8tZGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgLnRvZG8tZGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICYtZnVsbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAmLW51bWJlciB7XG4gICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgIGh0bWxbZGlyPSdydGwnXSAmIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMmVtO1xuICAgICAgfVxuICAgICAgaHRtbFtkaXI9J2x0ciddICYge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICAgICAgfVxuICAgIH1cbiAgICAmLW15IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoDayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-day',
                templateUrl: './todo-day.component.html',
                styleUrls: ['./todo-day.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { dayTimestamp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/todos/todo-form/todo-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/todos/todo-form/todo-form.component.ts ***!
  \********************************************************/
/*! exports provided: TodoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFormComponent", function() { return TodoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _uikit_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../uikit/text-input/text-input.component */ "./src/app/uikit/text-input/text-input.component.ts");
/* harmony import */ var _uikit_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../uikit/button/button.component */ "./src/app/uikit/button/button.component.ts");






class TodoFormComponent {
    constructor() {
        this.addNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](null);
        this.finishedNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    onSubmit() {
        if (this.form.valid) {
            this.addNotify.emit(this.form.value.title);
            this.onFinished();
        }
    }
    onFinished() {
        this.finishedNotify.emit(true);
    }
}
TodoFormComponent.ɵfac = function TodoFormComponent_Factory(t) { return new (t || TodoFormComponent)(); };
TodoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoFormComponent, selectors: [["app-todo-form"]], inputs: { form: "form" }, outputs: { addNotify: "addNotify", finishedNotify: "finishedNotify" }, decls: 6, vars: 5, consts: [[1, "todo-form", 3, "formGroup", "ngSubmit"], [3, "filedLabel", "fieldId", "control"], [3, "type"], [3, "btnClicked"]], template: function TodoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TodoFormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-text-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2714");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClicked", function TodoFormComponent_Template_app_button_btnClicked_4_listener() { return ctx.onFinished(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u274C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filedLabel", "Add title for your todo")("fieldId", "todo-new")("control", ctx.form == null ? null : ctx.form.get("title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "submit");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _uikit_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_2__["TextInputComponent"], _uikit_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .todo-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby1mb3JtL3RvZG8tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8tZm9ybS90b2RvLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAudG9kby1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-form',
                templateUrl: './todo-form.component.html',
                styleUrls: ['./todo-form.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addNotify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], finishedNotify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/todos/todo-list/todo-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/todos/todo-list/todo-list.component.ts ***!
  \********************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/store.service */ "./src/app/store/store.service.ts");
/* harmony import */ var _todo_day_todo_day_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo-day/todo-day.component */ "./src/app/todos/todo-day/todo-day.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todo/todo.component */ "./src/app/todos/todo/todo.component.ts");
/* harmony import */ var _todo_action_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todo-action.directive */ "./src/app/todos/todo-action.directive.ts");
/* harmony import */ var _uikit_add_btn_add_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../uikit/add-btn/add-btn.component */ "./src/app/uikit/add-btn/add-btn.component.ts");
/* harmony import */ var _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../todo-form/todo-form.component */ "./src/app/todos/todo-form/todo-form.component.ts");









function TodoListComponent_todo_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "todo", 5);
} if (rf & 2) {
    const todo_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", todo_r3);
} }
function TodoListComponent_app_add_btn_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-add-btn", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClicked", function TodoListComponent_app_add_btn_4_Template_app_add_btn_btnClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addMode = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodoListComponent_app_todo_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-todo-form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addNotify", function TodoListComponent_app_todo_form_5_Template_app_todo_form_addNotify_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addTodoEvent($event); })("finishedNotify", function TodoListComponent_app_todo_form_5_Template_app_todo_form_finishedNotify_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addMode = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TodoListComponent {
    constructor(storeService) {
        this.storeService = storeService;
        this.addMode = false;
    }
    addTodoEvent(title) {
        this.storeService.addTodo(title);
    }
    TrackByFunction(index, todo) {
        return todo.id;
    }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"])); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["todo-list"]], decls: 6, vars: 6, consts: [[1, "todo-list"], [1, "todo-list-day"], ["class", "todo-list-item", "appTodoAction", "", 3, "todo", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "todo-list-add", 3, "btnClicked", 4, "ngIf"], ["class", "todo-list-form", 3, "addNotify", "finishedNotify", 4, "ngIf"], ["appTodoAction", "", 1, "todo-list-item", 3, "todo"], [1, "todo-list-add", 3, "btnClicked"], [1, "todo-list-form", 3, "addNotify", "finishedNotify"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-todo-day", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodoListComponent_todo_2_Template, 1, 1, "todo", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TodoListComponent_app_add_btn_4_Template, 1, 0, "app-add-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodoListComponent_app_todo_form_5_Template, 1, 0, "app-todo-form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.storeService == null ? null : ctx.storeService.todos$))("ngForTrackBy", ctx.TrackByFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addMode);
    } }, directives: [_todo_day_todo_day_component__WEBPACK_IMPORTED_MODULE_2__["TodoDayComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"], _todo_action_directive__WEBPACK_IMPORTED_MODULE_5__["TodoActionDirective"], _uikit_add_btn_add_btn_component__WEBPACK_IMPORTED_MODULE_6__["AddBtnComponent"], _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_7__["TodoFormComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .todo-list[_ngcontent-%COMP%] {\n  max-width: 26em;\n  padding: 0 3em 3em;\n  background-color: #fff;\n  border-radius: 0.2em;\n  position: relative;\n  box-shadow: 0 6px 15px #cfd3da;\n  \n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .todo-list-day[_ngcontent-%COMP%] {\n  margin: 3em 0;\n}\n[_nghost-%COMP%]   .todo-list-item[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n[_nghost-%COMP%]   .todo-list-add[_ngcontent-%COMP%], [_nghost-%COMP%]   .todo-list-form[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n[_nghost-%COMP%]   .todo-list-add[_ngcontent-%COMP%] {\n  bottom: -3em;\n}\n[_nghost-%COMP%]   .todo-list-form[_ngcontent-%COMP%] {\n  bottom: -1em;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUVBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQUk7RUFDRSxhQUFBO0FBRU47QUFBSTtFQUNFLGtCQUFBO0FBRU47QUFDSTtFQUVFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBQU47QUFFSTtFQUNFLFlBQUE7QUFBTjtBQUVJO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FBQU4iLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLnRvZG8tbGlzdCB7XG4gICAgbWF4LXdpZHRoOiAyNmVtO1xuICAgIHBhZGRpbmc6IDAgM2VtIDNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDE1cHggI2NmZDNkYTtcbiAgICAvKiogdG8gcHJldmVudCBtYXJnaW4gY29sbGFwc2UgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgJi1kYXkge1xuICAgICAgbWFyZ2luOiAzZW0gMDtcbiAgICB9XG4gICAgJi1pdGVtIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICB9XG5cbiAgICAmLWFkZCxcbiAgICAmLWZvcm0ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cbiAgICAmLWFkZCB7XG4gICAgICBib3R0b206IC0zZW07XG4gICAgfVxuICAgICYtZm9ybSB7XG4gICAgICBib3R0b206IC0xZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'todo-list',
                templateUrl: './todo-list.component.html',
                styleUrls: ['./todo-list.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: src_app_store_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/todos/todo/todo.component.ts":
/*!**********************************************!*\
  !*** ./src/app/todos/todo/todo.component.ts ***!
  \**********************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _uikit_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../uikit/text-input/text-input.component */ "./src/app/uikit/text-input/text-input.component.ts");
/* harmony import */ var _uikit_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../uikit/button/button.component */ "./src/app/uikit/button/button.component.ts");







function TodoComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r0.todo == null ? null : ctx_r0.todo.id)("ngStyle", ctx_r0.getStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.todo == null ? null : ctx_r0.todo.title, " ");
} }
function TodoComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-text-input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filedLabel", "Add title for your todo")("fieldId", "todo-" + (ctx_r1.todo == null ? null : ctx_r1.todo.id))("control", ctx_r1.form == null ? null : ctx_r1.form.get("title"));
} }
function TodoComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClicked", function TodoComponent_ng_container_4_Template_app_button_btnClicked_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83D\uDCE8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClicked", function TodoComponent_ng_container_4_Template_app_button_btnClicked_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.editMode = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u270F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TodoComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClicked", function TodoComponent_ng_container_5_ng_container_1_Template_app_button_btnClicked_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.editAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClicked", function TodoComponent_ng_container_5_ng_container_1_Template_app_button_btnClicked_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.editMode = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TodoComponent_ng_container_5_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodoComponent_ng_container_5_input_2_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.checkedAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r8.todo == null ? null : ctx_r8.todo.id)("checked", ctx_r8.todo == null ? null : ctx_r8.todo.completed);
} }
function TodoComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoComponent_ng_container_5_ng_container_1_Template, 5, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodoComponent_ng_container_5_input_2_Template, 1, 2, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.editMode);
} }
class TodoComponent {
    constructor() {
        this.checkedNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](null);
        this.deleteNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](null);
        this.editNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](null);
        this.showAction = false;
        this.editMode = false;
    }
    ngOnInit() {
        var _a;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](((_a = this.todo) === null || _a === void 0 ? void 0 : _a.title) || null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    getStyle() {
        if (this.todo && this.todo.completed) {
            return {
                color: 'var(--text-muted)',
            };
        }
    }
    checkedAction() {
        this.checkedNotify.emit(this.todo);
    }
    deleteAction() {
        this.deleteNotify.emit(this.todo);
    }
    editAction() {
        if (this.form.valid) {
            this.editMode = false;
            this.editNotify.emit(Object.assign(Object.assign({}, this.todo), { title: this.form.value.title }));
        }
    }
}
TodoComponent.ɵfac = function TodoComponent_Factory(t) { return new (t || TodoComponent)(); };
TodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoComponent, selectors: [["todo"]], inputs: { todo: "todo", form: "form" }, outputs: { checkedNotify: "checkedNotify", deleteNotify: "deleteNotify", editNotify: "editNotify" }, decls: 6, vars: 4, consts: [[1, "todo-item", 3, "mouseenter", "mouseleave"], [3, "for", "ngStyle", 4, "ngIf"], [3, "formGroup", 4, "ngIf"], [1, "todo-item-actions"], [4, "ngIf"], [3, "for", "ngStyle"], [3, "formGroup"], [3, "filedLabel", "fieldId", "control"], [3, "btnClicked"], ["type", "checkbox", 3, "id", "checked", "change", 4, "ngIf"], ["type", "checkbox", 3, "id", "checked", "change"]], template: function TodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TodoComponent_Template_div_mouseenter_0_listener() { return ctx.showAction = true; })("mouseleave", function TodoComponent_Template_div_mouseleave_0_listener() { return ctx.showAction = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoComponent_label_1_Template, 2, 3, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodoComponent_form_2_Template, 2, 4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TodoComponent_ng_container_4_Template, 5, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodoComponent_ng_container_5_Template, 3, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAction && !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAction || ctx.editMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _uikit_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_3__["TextInputComponent"], _uikit_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .todo-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 -1em;\n}\n[_nghost-%COMP%]   .todo-item[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1em;\n}\n[_nghost-%COMP%]   .todo-item-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .todo-item-actions[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin: 0 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtBQUdOO0FBREk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFHTjtBQURNO0VBQ0UsZUFBQTtBQUdSIiwiZmlsZSI6InNyYy9hcHAvdG9kb3MvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLnRvZG8taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgLTFlbTtcbiAgICA+ICoge1xuICAgICAgbWFyZ2luOiAwIDFlbTtcbiAgICB9XG4gICAgJi1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbjogMCAwLjVlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'todo',
                templateUrl: './todo.component.html',
                styleUrls: ['./todo.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { todo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], checkedNotify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteNotify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], editNotify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/todos/todos.module.ts":
/*!***************************************!*\
  !*** ./src/app/todos/todos.module.ts ***!
  \***************************************/
/*! exports provided: TodosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosModule", function() { return TodosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todos/todo/todo.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todos/todo-list/todo-list.component.ts");
/* harmony import */ var _todo_day_todo_day_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-day/todo-day.component */ "./src/app/todos/todo-day/todo-day.component.ts");
/* harmony import */ var src_app_uikit_uikit_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/uikit/uikit.module */ "./src/app/uikit/uikit.module.ts");
/* harmony import */ var src_app_store_store_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/store.module */ "./src/app/store/store.module.ts");
/* harmony import */ var _todo_action_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo-action.directive */ "./src/app/todos/todo-action.directive.ts");
/* harmony import */ var _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo-form/todo-form.component */ "./src/app/todos/todo-form/todo-form.component.ts");











class TodosModule {
}
TodosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TodosModule });
TodosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TodosModule_Factory(t) { return new (t || TodosModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_uikit_uikit_module__WEBPACK_IMPORTED_MODULE_6__["UIKitModule"], src_app_store_store_module__WEBPACK_IMPORTED_MODULE_7__["StoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TodosModule, { declarations: [_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"],
        _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"],
        _todo_day_todo_day_component__WEBPACK_IMPORTED_MODULE_5__["TodoDayComponent"],
        _todo_action_directive__WEBPACK_IMPORTED_MODULE_8__["TodoActionDirective"],
        _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_9__["TodoFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_uikit_uikit_module__WEBPACK_IMPORTED_MODULE_6__["UIKitModule"], src_app_store_store_module__WEBPACK_IMPORTED_MODULE_7__["StoreModule"]], exports: [_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"],
                    _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"],
                    _todo_day_todo_day_component__WEBPACK_IMPORTED_MODULE_5__["TodoDayComponent"],
                    _todo_action_directive__WEBPACK_IMPORTED_MODULE_8__["TodoActionDirective"],
                    _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_9__["TodoFormComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_uikit_uikit_module__WEBPACK_IMPORTED_MODULE_6__["UIKitModule"], src_app_store_store_module__WEBPACK_IMPORTED_MODULE_7__["StoreModule"]],
                exports: [_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/uikit/add-btn/add-btn.component.ts":
/*!****************************************************!*\
  !*** ./src/app/uikit/add-btn/add-btn.component.ts ***!
  \****************************************************/
/*! exports provided: AddBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBtnComponent", function() { return AddBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AddBtnComponent {
    constructor() {
        this.btnClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
    }
    onClick() {
        this.btnClicked.emit(true);
    }
}
AddBtnComponent.ɵfac = function AddBtnComponent_Factory(t) { return new (t || AddBtnComponent)(); };
AddBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddBtnComponent, selectors: [["app-add-btn"]], outputs: { btnClicked: "btnClicked" }, decls: 2, vars: 0, consts: [[1, "add-btn", 3, "click"]], template: function AddBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddBtnComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  font-size: 3em;\n  width: 2em;\n  height: 2em;\n  background-color: #50e3a4;\n  box-shadow: 0 3px 10px #3ec088;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  border: none;\n  color: #46be8b;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWlraXQvYWRkLWJ0bi9hZGQtYnRuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvdWlraXQvYWRkLWJ0bi9hZGQtYnRuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLmFkZC1idG4ge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwZTNhNDtcbiAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4ICMzZWMwODg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICM0NmJlOGI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-btn',
                templateUrl: './add-btn.component.html',
                styleUrls: ['./add-btn.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { btnClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/uikit/button/button.component.ts":
/*!**************************************************!*\
  !*** ./src/app/uikit/button/button.component.ts ***!
  \**************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class ButtonComponent {
    constructor() {
        this.type = 'button';
        this.btnClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onClick() {
        this.btnClicked.emit(true);
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { type: "type" }, outputs: { btnClicked: "btnClicked" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "app-btn", 3, "type", "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .app-btn[_ngcontent-%COMP%] {\n  padding: 1em;\n  border: solid 1px currentColor;\n  background: transparent;\n  cursor: pointer;\n  color: currentColor;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWlraXQvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3Vpa2l0L2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAuYXBwLWJ0biB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlcjogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/uikit/text-input/text-input.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/uikit/text-input/text-input.component.ts ***!
  \**********************************************************/
/*! exports provided: TextInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInputComponent", function() { return TextInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class TextInputComponent {
    constructor() {
        /**
         * 'fieldId' is a unique field identification
         * Example: 'email', 'password'
         *    ---REQUIRED PROPERTY---
         */
        this.showError = true;
        this.filedType = 'text'; // default value is string
        this._validationErrors = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.validationErrors$ = this._validationErrors.asObservable();
    }
    ngDoCheck() {
        if (this.control && this.control.touched && this.control.invalid) {
            this._validationErrors.next(this.control['errors']);
        }
        else {
            this._validationErrors.next(null);
        }
    }
}
TextInputComponent.ɵfac = function TextInputComponent_Factory(t) { return new (t || TextInputComponent)(); };
TextInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextInputComponent, selectors: [["app-text-input"]], inputs: { showError: "showError", fieldId: "fieldId", filedType: "filedType", filedLabel: "filedLabel", control: "control" }, decls: 2, vars: 8, consts: [[1, "form-control", 3, "id", "type", "placeholder", "formControl"]], template: function TextInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx.validationErrors$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.fieldId)("type", ctx.filedType)("placeholder", ctx.filedLabel)("formControl", ctx.control);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 1em;\n  border: solid 1px #d5d7e0;\n  box-shadow: none;\n}\n[_nghost-%COMP%]   .form-control.has-error[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWlraXQvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUVKO0FBREk7RUFDRSxxQkFBQTtBQUdOIiwiZmlsZSI6InNyYy9hcHAvdWlraXQvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLmZvcm0tY29udHJvbCB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNkNWQ3ZTA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAmLmhhcy1lcnJvciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-input',
                templateUrl: './text-input.component.html',
                styleUrls: ['./text-input.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { showError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fieldId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filedType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filedLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/uikit/uikit.module.ts":
/*!***************************************!*\
  !*** ./src/app/uikit/uikit.module.ts ***!
  \***************************************/
/*! exports provided: UIKitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIKitModule", function() { return UIKitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _add_btn_add_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-btn/add-btn.component */ "./src/app/uikit/add-btn/add-btn.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button/button.component */ "./src/app/uikit/button/button.component.ts");
/* harmony import */ var _text_input_text_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text-input/text-input.component */ "./src/app/uikit/text-input/text-input.component.ts");







class UIKitModule {
}
UIKitModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UIKitModule });
UIKitModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UIKitModule_Factory(t) { return new (t || UIKitModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UIKitModule, { declarations: [_add_btn_add_btn_component__WEBPACK_IMPORTED_MODULE_3__["AddBtnComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _text_input_text_input_component__WEBPACK_IMPORTED_MODULE_5__["TextInputComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_add_btn_add_btn_component__WEBPACK_IMPORTED_MODULE_3__["AddBtnComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _text_input_text_input_component__WEBPACK_IMPORTED_MODULE_5__["TextInputComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UIKitModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
                declarations: [_add_btn_add_btn_component__WEBPACK_IMPORTED_MODULE_3__["AddBtnComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _text_input_text_input_component__WEBPACK_IMPORTED_MODULE_5__["TextInputComponent"]],
                exports: [_add_btn_add_btn_component__WEBPACK_IMPORTED_MODULE_3__["AddBtnComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _text_input_text_input_component__WEBPACK_IMPORTED_MODULE_5__["TextInputComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\IMM90\Desktop\islam\ng-crud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map