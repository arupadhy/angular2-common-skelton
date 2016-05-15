import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DashboardService {

	constructor(private _http:Http) {

	}

	getClientBriefData() {
		return this._http.get("http://localhost:3000/app/dashboard/dummyClient.json")
			.map(res => res.json());
	}


}
