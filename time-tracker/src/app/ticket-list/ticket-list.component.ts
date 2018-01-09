import { Component, OnInit, ViewChild } from '@angular/core';
import { TicketService } from './ticket.service';
import { Ticket } from './ticket.model';
import { FormGroup } from '@angular/forms';
import { Response } from '@angular/http';

@Component({
	selector: 'app-ticket-list',
	templateUrl: './ticket-list.component.html',
	styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
	tickets: Ticket[] = [];

	@ViewChild('f')
	form: FormGroup;

	constructor(private ticketService: TicketService) { }

	ngOnInit() {
		/*this.ticketService.saveTicket(new Ticket(0, "TLGPE-111", '1h')).subscribe(
			(response: Response) => {
				console.log(response.json());
			},
			(error) => console.log(error)
		);*/

		this.ticketService.getTickets().subscribe(
			(tickets: Ticket[]) => {
				console.log(tickets);
				this.tickets = tickets
			},
			(error) => console.log(error)
		);
	}

	onSubmit() {
		console.log('asd');
	}

}
