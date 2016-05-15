"use strict";
var Sentence = (function () {
    function Sentence(sentence, cycl) {
        this.sentence = sentence;
        this.cycl = cycl;
    }
    return Sentence;
}());
exports.Sentence = Sentence;
var Concepts = (function () {
    function Concepts(name, sentences) {
        this.name = name;
        this.sentences = sentences;
    }
    return Concepts;
}());
exports.Concepts = Concepts;
//# sourceMappingURL=concepts.model.js.map