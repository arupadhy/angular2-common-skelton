import {Component,OnInit} from '@angular/core';
import {Concepts} from './concepts.model';
import {ConceptService} from './concepts.service';
declare var d3:any;

@Component({
	selector: 'cyc-concepts',
	templateUrl: 'app/concepts/concepts.component.html',
	styleUrls: ['app/concepts/concepts.component.css'],
	providers: [ConceptService]
})
export class ConceptsComponent implements OnInit{

	concepts: Concepts[];

	constructor(private conceptService:ConceptService){

	}

	ngOnInit() {
		this.concepts = this.conceptService.getRecommendations();
		console.log(this.concepts);		
	}

}