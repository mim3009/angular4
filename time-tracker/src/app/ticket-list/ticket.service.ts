import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Ticket } from "./ticket.model";

import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class TicketService {
	private dataAddress = "https://time-tracker-ab2c1.firebaseio.com/data.json";

	constructor(private http: Http) {}

	getTickets() {
		return this.http.get(this.dataAddress).map((response: Response) => {
			const tickets = response.json();
			let resultTicketsList = [];

			console.log(tickets);
			for (const ticket of tickets) {
				resultTicketsList.push(ticket);
			}
			return resultTicketsList;
		}).catch((error) => {
			return Observable.throw(error);
		});
	}

	saveTicket(ticket: Ticket) {
		return this.http.post(this.dataAddress, ticket);
	}
}