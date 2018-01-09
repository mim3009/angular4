import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Server } from "./server.model";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService {
	constructor(private http: Http) {}

	storeServers(servers: Server[]) {
		const headers = new Headers({
			'Content-Type': 'application/json'
		});
		//return this.http.post('https://ng-http-c81ee.firebaseio.com/data.json', servers, {headers: headers});
		return this.http.put('https://ng-http-c81ee.firebaseio.com/data.json', servers, {headers: headers});
	}

	getServers() {
		return this.http.get('https://ng-http-c81ee.firebaseio.com/data.json').map((response: Response) => {
			const data = response.json();
			
			for (const server of data) {
				server.name = 'FETCHED_' + server.name;
			}
			
			console.log(data);
			return data;
		}).catch((error: Response) => {
			return Observable.throw(error);
		});
	}

	getAppName() {
		return this.http.get('https://ng-http-c81ee.firebaseio.com/appName.json').map((response: Response) => {
			return response.json();
		});
	}
}