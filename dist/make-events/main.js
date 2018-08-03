(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-toolbar></app-nav-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'make-events';
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
const navigation_module_1 = __webpack_require__(/*! ./navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
const service_worker_1 = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
const environment_1 = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
const navigation_routing_module_1 = __webpack_require__(/*! ./navigation-routing.module */ "./src/app/navigation-routing.module.ts");
const main_module_1 = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            main_module_1.MainModule,
            http_1.HttpClientModule,
            platform_browser_1.BrowserModule,
            navigation_module_1.NavigationModule,
            navigation_routing_module_1.NavigationRoutingModule,
            service_worker_1.ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment_1.environment.production })
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/main/about/about.component.css":
/*!************************************************!*\
  !*** ./src/app/main/about/about.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about {\n  background-color: rgba(255, 255, 79, 0.726);\n  margin-top: 3%;\n  margin-bottom: 3%; \n}"

/***/ }),

/***/ "./src/app/main/about/about.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/about/about.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"about\">About</mat-card>"

/***/ }),

/***/ "./src/app/main/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/about/about.component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = __decorate([
    core_1.Component({
        selector: 'app-about',
        template: __webpack_require__(/*! ./about.component.html */ "./src/app/main/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/main/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/main/events-grid/events-grid.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/events-grid/events-grid.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".events-card {\n  background-color: rgba(255, 255, 79, 0.726);\n  margin-top: 3%;\n  margin-bottom: 3%;\n}"

/***/ }),

/***/ "./src/app/main/events-grid/events-grid.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/events-grid/events-grid.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"events-card\">\n  <mat-card-header>\n    <mat-card-title>Upcoming events</mat-card-title>\n    <mat-card-subtitle>Join them all! :)</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <div *ngIf=\"pageEvent\">\n      <mat-grid-list cols=\"2\" rowHeight=\"1:1\">\n        <mat-grid-tile>1</mat-grid-tile>\n        <mat-grid-tile>2</mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </mat-card-content>\n  <mat-card-actions>\n    <mat-paginator [length]=\"100\" [pageSize]=\"2\" [pageSizeOptions]=\"[2]\" (page)=\"pageEvent = $event\">\n    </mat-paginator>\n    <button mat-button>Previous</button>\n    <button mat-button>Next</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/main/events-grid/events-grid.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/events-grid/events-grid.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const list_events_service_1 = __webpack_require__(/*! ../services/list-events.service */ "./src/app/main/services/list-events.service.ts");
let EventsGridComponent = class EventsGridComponent {
    constructor(service) {
        this.service = service;
        this.events = [];
    }
    ngOnInit() {
        this.eventsSub = this.service.getEvents().subscribe((res) => {
            if (res) {
                this.events = res;
            }
            else {
                console.log('ERROR');
            }
        });
    }
    ngOnDestroy() {
        this.eventsSub.unsubscribe();
    }
};
EventsGridComponent = __decorate([
    core_1.Component({
        selector: 'app-events-grid',
        template: __webpack_require__(/*! ./events-grid.component.html */ "./src/app/main/events-grid/events-grid.component.html"),
        styles: [__webpack_require__(/*! ./events-grid.component.css */ "./src/app/main/events-grid/events-grid.component.css")]
    }),
    __metadata("design:paramtypes", [list_events_service_1.ListEventsService])
], EventsGridComponent);
exports.EventsGridComponent = EventsGridComponent;


/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const material_module_1 = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
const events_grid_component_1 = __webpack_require__(/*! ./events-grid/events-grid.component */ "./src/app/main/events-grid/events-grid.component.ts");
const about_component_1 = __webpack_require__(/*! ./about/about.component */ "./src/app/main/about/about.component.ts");
const list_events_service_1 = __webpack_require__(/*! ./services/list-events.service */ "./src/app/main/services/list-events.service.ts");
const post_event_service_1 = __webpack_require__(/*! ./services/post-event.service */ "./src/app/main/services/post-event.service.ts");
let MainModule = class MainModule {
};
MainModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            material_module_1.MaterialModule
        ],
        providers: [list_events_service_1.ListEventsService, post_event_service_1.PostEventService],
        declarations: [events_grid_component_1.EventsGridComponent, about_component_1.AboutComponent],
        exports: [events_grid_component_1.EventsGridComponent, about_component_1.AboutComponent]
    })
], MainModule);
exports.MainModule = MainModule;


/***/ }),

/***/ "./src/app/main/services/list-events.service.ts":
/*!******************************************************!*\
  !*** ./src/app/main/services/list-events.service.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const environment_prod_1 = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
let ListEventsService = class ListEventsService {
    constructor(http) {
        this.http = http;
        this.API_PATH = environment_prod_1.environment.API_PATH;
    }
    handleError(err) {
        return rxjs_1.throwError(`Couldn\'t fetch events: ${err}`);
    }
    getEvents() {
        return this.http.get(this.API_PATH).pipe(operators_1.catchError((err) => this.handleError(err)));
    }
};
ListEventsService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], ListEventsService);
exports.ListEventsService = ListEventsService;


/***/ }),

/***/ "./src/app/main/services/post-event.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/services/post-event.service.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let PostEventService = class PostEventService {
    constructor() { }
};
PostEventService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], PostEventService);
exports.PostEventService = PostEventService;


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
const material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            animations_1.BrowserAnimationsModule,
            material_1.MatButtonModule,
            material_1.MatCheckboxModule,
            material_1.MatToolbarModule,
            material_1.MatMenuModule,
            material_1.MatIconModule,
            material_1.MatCardModule,
            material_1.MatGridListModule,
            material_1.MatPaginatorModule
        ],
        exports: [
            material_1.MatButtonModule,
            material_1.MatCheckboxModule,
            material_1.MatToolbarModule,
            material_1.MatMenuModule,
            material_1.MatIconModule,
            material_1.MatCardModule,
            material_1.MatGridListModule,
            material_1.MatPaginatorModule,
            animations_1.BrowserAnimationsModule
        ],
        declarations: []
    })
], MaterialModule);
exports.MaterialModule = MaterialModule;


/***/ }),

/***/ "./src/app/navigation-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/navigation-routing.module.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const events_grid_component_1 = __webpack_require__(/*! ./main/events-grid/events-grid.component */ "./src/app/main/events-grid/events-grid.component.ts");
const about_component_1 = __webpack_require__(/*! ./main/about/about.component */ "./src/app/main/about/about.component.ts");
const main_module_1 = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
const routes = [
    { path: '*', redirectTo: '/calendar', pathMatch: 'full' },
    { path: 'event', component: events_grid_component_1.EventsGridComponent },
    { path: 'calendar', component: events_grid_component_1.EventsGridComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
let NavigationRoutingModule = class NavigationRoutingModule {
};
NavigationRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes), main_module_1.MainModule],
        exports: [router_1.RouterModule]
    })
], NavigationRoutingModule);
exports.NavigationRoutingModule = NavigationRoutingModule;


/***/ }),

/***/ "./src/app/navigation/nav-toolbar/nav-toolbar.component.css":
/*!******************************************************************!*\
  !*** ./src/app/navigation/nav-toolbar/nav-toolbar.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n    flex: 1 1 auto;\n}\n\n.toolbar {\n    background-color: rgba(122, 179, 189, 0.349);\n    margin-top: 1%;\n}"

/***/ }),

/***/ "./src/app/navigation/nav-toolbar/nav-toolbar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/nav-toolbar/nav-toolbar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar\">\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button routerLink=\"/event\" mat-menu-item>\n      <mat-icon>event</mat-icon>\n      <span>Create event</span>\n    </button>\n    <button routerLink=\"/calendar\" mat-menu-item >\n      <mat-icon>event_note</mat-icon>\n      <span>Calendar</span>\n    </button>\n    <button routerLink=\"/about\" mat-menu-item>\n      <mat-icon>help</mat-icon>\n      <span>About</span>\n    </button>\n  </mat-menu>\n  <span class=\"example-spacer\"></span>\n  <span>Make Events App</span>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/navigation/nav-toolbar/nav-toolbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/navigation/nav-toolbar/nav-toolbar.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let NavToolbarComponent = class NavToolbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavToolbarComponent = __decorate([
    core_1.Component({
        selector: 'app-nav-toolbar',
        template: __webpack_require__(/*! ./nav-toolbar.component.html */ "./src/app/navigation/nav-toolbar/nav-toolbar.component.html"),
        styles: [__webpack_require__(/*! ./nav-toolbar.component.css */ "./src/app/navigation/nav-toolbar/nav-toolbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavToolbarComponent);
exports.NavToolbarComponent = NavToolbarComponent;


/***/ }),

/***/ "./src/app/navigation/navigation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/navigation/navigation.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const navigation_routing_module_1 = __webpack_require__(/*! ../navigation-routing.module */ "./src/app/navigation-routing.module.ts");
const material_module_1 = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
const nav_toolbar_component_1 = __webpack_require__(/*! ./nav-toolbar/nav-toolbar.component */ "./src/app/navigation/nav-toolbar/nav-toolbar.component.ts");
let NavigationModule = class NavigationModule {
};
NavigationModule = __decorate([
    core_1.NgModule({
        imports: [
            material_module_1.MaterialModule,
            common_1.CommonModule,
            navigation_routing_module_1.NavigationRoutingModule
        ],
        declarations: [nav_toolbar_component_1.NavToolbarComponent],
        exports: [nav_toolbar_component_1.NavToolbarComponent]
    })
], NavigationModule);
exports.NavigationModule = NavigationModule;


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true,
    API_PATH: 'https://makevents-be.herokuapp.com'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    API_PATH: 'localhost:3000/all'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
__webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dumbo/Documents/GitHub/EventsAppFE/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map