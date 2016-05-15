import {Component,OnInit} from '@angular/core';
import {Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ROUTER_DIRECTIVES,Router} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {ConceptsComponent} from '../concepts/concepts.component';
import {PlannerComponent} from '../planner/planner.component';

@Component({
	selector: 'planner-app',
	templateUrl: 'app/main/app.component.html',
	styleUrls: ['app/main/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS]
})

@Routes([
       {path:'/home',component:DashboardComponent},
	   { path: '/mediaplan', component: PlannerComponent},
	   {path: '/concepts',component: ConceptsComponent}
       
	])
export class AppComponent implements OnInit{

	constructor(private _router:Router){

	}

	ngOnInit() {
		this._router.navigate(['home']);
	}

}