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
var dashboard_service_1 = require('./dashboard.service');
// class BudgetCircle {
// 	private context: CanvasRenderingContext2D;
// 	private canvas: HTMLCanvasElement;
// 	public drawBudgetDistribution() {
// 	}
// 	constructor(private x: number, private y: number,
// 		private radius: number, private color: string = 'red', private width: number = 10) {
// 	}
// }
var DashboardComponent = (function () {
    //private budgetCircle: BudgetCircle = new BudgetCircle(0,0,200);
    // @ViewChild("test") canvas;
    function DashboardComponent(_router, _dashboardService) {
        this._router = _router;
        this._dashboardService = _dashboardService;
    }
    DashboardComponent.prototype.createMediaPlan = function () {
        this._router.navigate(['mediaplan']);
    };
    //No need to be fancy for now
    // ngAfterViewInit() {
    // 	console.log(this.canvas);
    // }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dashboardService.getClientBriefData().subscribe(function (data) { return _this.clientBriefs = data; }, function (error) { return console.log(error); }, function () { return console.log("client brief data obtained"); });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard-app',
            templateUrl: 'app/dashboard/dashboard.component.html',
            styleUrls: ['app/dashboard/dashboard.component.css'],
            providers: [dashboard_service_1.DashboardService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, dashboard_service_1.DashboardService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map