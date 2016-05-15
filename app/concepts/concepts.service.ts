import {Injector} from '@angular/core';
import {Http} from '@angular/http';
import {Concepts,Sentence} from './concepts.model';


@Injector
export class ConceptService {

	concepts: Concepts[] = [];
	data: any[];

	constructor(private _http: Http) {

	}

	extractSentences(concept:any):Sentence[]{
		var sentences = [];
		concept.children.forEach(child => {
			sentences.push(new Sentence(child.sentence, child.cyclString));
		})
		return sentences;
	}

	getRecommendations():Concepts[] {
		var ref = this;
		this._http.get("http://localhost:3000/app/concepts/concepts.json")
			.map(res => res.json())
			.subscribe(answer => {
				answer.forEach((c) => {
					ref.concepts.push(new Concepts(c.name, ref.extractSentences(c)));
				})
			});
		return this.concepts;

	}

}