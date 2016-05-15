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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var dashboard_component_1 = require('../dashboard/dashboard.component');
var router_2 = require('@angular/router');
var http_1 = require('@angular/http');
var concepts_component_1 = require('../concepts/concepts.component');
var planner_component_1 = require('../planner/planner.component');
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._router.navigate(['home']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'planner-app',
            templateUrl: 'app/main/app.component.html',
            styleUrls: ['app/main/app.component.css'],
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/home', component: dashboard_component_1.DashboardComponent },
            { path: '/mediaplan', component: planner_component_1.PlannerComponent },
            { path: '/concepts', component: concepts_component_1.ConceptsComponent }
        ]), 
        __metadata('design:paramtypes', [router_2.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map