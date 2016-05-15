import {Component,OnInit,AfterViewInit,ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DashboardService} from './dashboard.service';



// class BudgetCircle {

// 	private context: CanvasRenderingContext2D;
// 	private canvas: HTMLCanvasElement;

// 	public drawBudgetDistribution() {

// 	}

// 	constructor(private x: number, private y: number,
// 		private radius: number, private color: string = 'red', private width: number = 10) {

// 	}
// }

@Component({
	selector: 'dashboard-app',
	templateUrl: 'app/dashboard/dashboard.component.html',
	styleUrls: ['app/dashboard/dashboard.component.css'],
	providers: [DashboardService]
})

export class DashboardComponent implements OnInit{

	private clientBriefs: any[];
	//private budgetCircle: BudgetCircle = new BudgetCircle(0,0,200);
	// @ViewChild("test") canvas;

	constructor(private _router:Router,private _dashboardService:DashboardService) {

	}

	public createMediaPlan() {
		this._router.navigate(['mediaplan']);
	}

	//No need to be fancy for now
	// ngAfterViewInit() {
	// 	console.log(this.canvas);
	// }

	ngOnInit() {
		this._dashboardService.getClientBriefData().subscribe(
			data => this.clientBriefs = data,
			error => console.log(error),
			() => console.log("client brief data obtained")
		);
	}

}