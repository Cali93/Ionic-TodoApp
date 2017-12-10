webpackJsonp([2],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskPageModule", function() { return AddTaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_task__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddTaskPageModule = (function () {
    function AddTaskPageModule() {
    }
    AddTaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_task__["a" /* AddTaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_task__["a" /* AddTaskPage */]),
            ],
        })
    ], AddTaskPageModule);
    return AddTaskPageModule;
}());

//# sourceMappingURL=add-task.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_list_todo_list_service__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddTaskPage = (function () {
    function AddTaskPage(navCtrl, navParams, todo, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todo = todo;
        this.toast = toast;
        this.item = {
            title: '',
            description: '',
            starts: undefined,
            ends: undefined
        };
    }
    AddTaskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddTaskPage');
    };
    AddTaskPage.prototype.addItem = function (item) {
        var _this = this;
        this.todo.addItem(item).then(function (ref) {
            _this.toast.show(item.title + " added !");
            _this.navCtrl.setRoot('HomePage', { key: ref.key });
        });
    };
    AddTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-task',template:/*ion-inline-start:"/home/azer8/IonicTodoList/src/pages/add-task/add-task.html"*/'<!--\n  Generated template for the AddTaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Add Task</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item>\n      <ion-label>Title :</ion-label>\n      <ion-input [(ngModel)]="item.title" placeholder="Add task title"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Description :</ion-label>\n      <ion-textarea [(ngModel)]="item.description" placeholder="Add task description"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Starts :</ion-label>\n      <ion-datetime [(ngModel)]="item.starts" displayFormat="DD MMM YYYY HH:mm" min="2016" max="2020-10-31" pickerFormat="DD MMM YYYY HH:mm"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Ends :</ion-label>\n      <ion-datetime [(ngModel)]="item.ends" displayFormat="DD MMM YYYY HH:mm" min="2016" max="2020-10-31" pickerFormat="DD MMM YYYY HH:mm"></ion-datetime>\n    </ion-item>\n\n<!-- {{item | json}} -->\n<button ion-button block (click)="addItem(item)" color="secondary">Add task</button>\n</ion-content>\n'/*ion-inline-end:"/home/azer8/IonicTodoList/src/pages/add-task/add-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_todo_list_todo_list_service__["a" /* TodoListService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__["a" /* ToastService */]])
    ], AddTaskPage);
    return AddTaskPage;
}());

//# sourceMappingURL=add-task.js.map

/***/ })

});
//# sourceMappingURL=2.js.map