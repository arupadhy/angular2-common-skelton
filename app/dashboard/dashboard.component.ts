import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'dashboard-app',
	templateUrl: 'app/dashboard/dashboard.component.html',
	styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent {

	constructor(private _router:Router) {

	}

	public register() {
		this._router.navigate(['register']);
	}

}