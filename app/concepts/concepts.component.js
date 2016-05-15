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
var concepts_service_1 = require('./concepts.service');
var ConceptsComponent = (function () {
    function ConceptsComponent(conceptService) {
        this.conceptService = conceptService;
    }
    ConceptsComponent.prototype.ngOnInit = function () {
        this.concepts = this.conceptService.getRecommendations();
        console.log(this.concepts);
    };
    ConceptsComponent = __decorate([
        core_1.Component({
            selector: 'cyc-concepts',
            templateUrl: 'app/concepts/concepts.component.html',
            styleUrls: ['app/concepts/concepts.component.css'],
            providers: [concepts_service_1.ConceptService]
        }), 
        __metadata('design:paramtypes', [concepts_service_1.ConceptService])
    ], ConceptsComponent);
    return ConceptsComponent;
}());
exports.ConceptsComponent = ConceptsComponent;
//# sourceMappingURL=concepts.component.js.map