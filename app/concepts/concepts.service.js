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
var http_1 = require('@angular/http');
var concepts_model_1 = require('./concepts.model');
var ConceptService = (function () {
    function ConceptService(_http) {
        this._http = _http;
        this.concepts = [];
    }
    ConceptService.prototype.extractSentences = function (concept) {
        var sentences = [];
        concept.children.forEach(function (child) {
            sentences.push(new concepts_model_1.Sentence(child.sentence, child.cyclString));
        });
        return sentences;
    };
    ConceptService.prototype.getRecommendations = function () {
        var ref = this;
        this._http.get("http://localhost:3000/app/concepts/concepts.json")
            .map(function (res) { return res.json(); })
            .subscribe(function (answer) {
            answer.forEach(function (c) {
                ref.concepts.push(new concepts_model_1.Concepts(c.name, ref.extractSentences(c)));
            });
        });
        return this.concepts;
    };
    ConceptService = __decorate([
        core_1.Injector, 
        __metadata('design:paramtypes', [http_1.Http])
    ], ConceptService);
    return ConceptService;
}());
exports.ConceptService = ConceptService;
//# sourceMappingURL=concepts.service.js.map