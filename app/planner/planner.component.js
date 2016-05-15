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
var PlannerComponent = (function () {
    function PlannerComponent(_router, _elementRef) {
        this._router = _router;
        this._elementRef = _elementRef;
        this.planInput = {};
        this.productInput = {};
        this.audienceInput = {};
        this.businessObjectiveInput = {};
        this.kpiToMeasureInput = {};
        this.showAddedInput = false;
        this.showUserInputs = false;
        this.planInput.show = true;
        this.planInput.next = false;
        this.productInput.show = false;
        this.productInput.next = false;
        this.audienceInput.show = false;
        this.audienceInput.next = false;
        this.businessObjectiveInput.show = false;
        this.businessObjectiveInput.next = false;
        this.kpiToMeasureInput.show = false;
        this.kpiToMeasureInput.next = false;
    }
    PlannerComponent.prototype.loadCycConcepts = function () {
        this._router.navigate(['concepts']);
    };
    PlannerComponent.prototype.getCycConcepts = function () {
        this.kpiToMeasureInput.show = false;
        this.showUserInputs = true;
        this.kpiToMeasureInput.name = $('#kpiToMeasureInputId').val();
        //this._router.navigate(['concepts']);
    };
    PlannerComponent.prototype.enableProductInput = function () {
        console.log($("#campaignNameInput"));
        $("#campaignNameInput").autocomplete({
            source: ["ForeEver Faster", "Where’s the Beef?", "We Try Harder", "ForeEver Lasting", " ForEver Name", "Just Do It"]
        });
        this.planInput.next = this.planInput.planName.length == 0 ? false : true;
    };
    PlannerComponent.prototype.takeProductInput = function () {
        this.planInput.show = false;
        this.productInput.show = true;
        this.showAddedInput = true;
        this.planInput.planName = $("#campaignNameInput").val();
    };
    PlannerComponent.prototype.enableAudienceInput = function () {
        $("#productInputId").autocomplete({
            source: ["Product1", "Product2", "Product3", "Product4", "Product5"]
        });
        this.productInput.next = this.productInput.productName.length == 0 ? false : true;
    };
    PlannerComponent.prototype.takeAudienceInput = function () {
        this.productInput.show = false;
        this.audienceInput.show = true;
        this.productInput.productName = $("#productInputId").val();
    };
    PlannerComponent.prototype.split = function (val) {
        this.businessObjectiveInput.next = true;
        return val.split(/,\s*/);
    };
    PlannerComponent.prototype.extractLast = function (term) {
        return this.split(term).pop();
    };
    PlannerComponent.prototype.enableBusinessObjectiveInput = function () {
        var ref = this;
        this.audienceInput.next = this.audienceInput.name.length == 0 ? false : true;
        $("#audienceInputId").autocomplete({
            minLength: 0,
            source: function (request, response) {
                // delegate back to autocomplete, but extract the last term
                response($.ui.autocomplete.filter(["youthful in spirit", "embrace new things", "Believe life's just better when you join in"], ref.extractLast(request.term)));
            },
            focus: function () {
                // prevent value inserted on focus
                return false;
            },
            select: function (event, ui) {
                var terms = ref.split(this.value);
                // remove the current input
                terms.pop();
                // add the selected item
                terms.push(ui.item.value);
                // add placeholder to get the comma-and-space at the end
                terms.push("");
                this.value = terms.join(", ");
                return false;
            }
        });
    };
    PlannerComponent.prototype.getSelectedKpis = function () {
        return this.kpiToMeasureInput.name.split(",").filter(function (a) { return a.length > 1; });
    };
    PlannerComponent.prototype.getSelectedBusinessObjectives = function () {
        return this.businessObjectiveInput.name.split(",").filter(function (a) { return a.length > 1; });
    };
    PlannerComponent.prototype.getSelectedTargetAudience = function () {
        return this.audienceInput.name.split(",").filter(function (a) { return a.length > 1; });
    };
    PlannerComponent.prototype.takeBusinessObjectiveInput = function () {
        this.audienceInput.show = false;
        this.businessObjectiveInput.show = true;
        this.audienceInput.name = $("#audienceInputId").val();
    };
    PlannerComponent.prototype.enableKpiMeasureInput = function () {
        var ref = this;
        $('#businessObjectiveInputId').autocomplete({
            minLength: 0,
            source: function (request, response) {
                // delegate back to autocomplete, but extract the last term
                response($.ui.autocomplete.filter(["Deliver agressive growth by capturing more penetration(325m in GSV",
                    "ReEnergize the brand and earn a coveted place in social connectors hearts",
                    "Reduce the cost of manufacturing by opening online stores"], ref.extractLast(request.term)));
            },
            focus: function () {
                // prevent value inserted on focus
                return false;
            },
            select: function (event, ui) {
                var terms = ref.split(this.value);
                // remove the current input
                terms.pop();
                // add the selected item
                terms.push(ui.item.value);
                // add placeholder to get the comma-and-space at the end
                terms.push("");
                this.value = terms.join(", ");
                return false;
            }
        });
        this.businessObjectiveInput.next = this.businessObjectiveInput.name.length == 0 ? false : true;
    };
    PlannerComponent.prototype.takeKpiToMeasureInput = function () {
        this.businessObjectiveInput.show = false;
        this.kpiToMeasureInput.show = true;
        this.businessObjectiveInput.name = $("#businessObjectiveInputId").val();
    };
    PlannerComponent.prototype.enableFinalNext = function () {
        var ref = this;
        $('#kpiToMeasureInputId').autocomplete({
            minLength: 0,
            source: function (request, response) {
                // delegate back to autocomplete, but extract the last term
                response($.ui.autocomplete.filter(["Customer Loyality: increase engagement by 12%",
                    "Make new Customers: Target young working", "Profit Margin: Target working professionals"], ref.extractLast(request.term)));
            },
            focus: function () {
                // prevent value inserted on focus
                return false;
            },
            select: function (event, ui) {
                var terms = ref.split(this.value);
                // remove the current input
                terms.pop();
                // add the selected item
                terms.push(ui.item.value);
                // add placeholder to get the comma-and-space at the end
                terms.push("");
                this.value = terms.join(", ");
                return false;
            }
        });
        this.kpiToMeasureInput.next = this.kpiToMeasureInput.name ? this.kpiToMeasureInput.name.length == 0 ? false : true : false;
    };
    PlannerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild("productInputId"), 
        __metadata('design:type', Object)
    ], PlannerComponent.prototype, "product", void 0);
    PlannerComponent = __decorate([
        core_1.Component({
            selector: 'create-plan',
            templateUrl: 'app/planner/planner.component.html',
            styleUrls: ['app/planner/planner.component.css', 'app/planner/token-input.css', 'app/planner/token-input-mac.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef])
    ], PlannerComponent);
    return PlannerComponent;
}());
exports.PlannerComponent = PlannerComponent;
//# sourceMappingURL=planner.component.js.map