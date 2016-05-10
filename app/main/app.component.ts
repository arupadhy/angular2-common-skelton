import {Component,OnInit} from '@angular/core';
import {Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {RegisterComponent} from '../register/register.component';
import {ROUTER_DIRECTIVES,Router} from '@angular/router';

@Component({
	selector: 'planner-app',
	templateUrl: 'app/main/app.component.html',
	styleUrls: ['app/main/app.component.css'],
	directives: [ROUTER_DIRECTIVES]
})

@Routes([
       {path:'/home',component:DashboardComponent},
       {path:'/register',component:RegisterComponent}
	])
export class AppComponent implements OnInit{

	constructor(private _router:Router){

	}

	ngOnInit() {
		this._router.navigate(['home']);
	}

}