import {Component} from '@angular/core';

export class Sentence {
	sentence: string;
	cycl: string;

	constructor(sentence:string, cycl:string) {
		this.sentence = sentence;
		this.cycl = cycl;
	}
}

export class Concepts {

	name: string;
	sentences: Sentence[];

	constructor(name:string, sentences:Sentence[]) {
		this.name = name;
		this.sentences = sentences;
	}

}