import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketItemComponent } from './ticket-list/ticket-item/ticket-item.component';
import { AppRoutingModule } from './app-routing.module';
import { TicketService } from './ticket-list/ticket.service';

@NgModule({
	declarations: [
		AppComponent,
		TicketListComponent,
		TicketItemComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpModule
	],
	providers: [TicketService],
	bootstrap: [AppComponent]
})
export class AppModule { }
