import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketListComponent } from "./ticket-list/ticket-list.component";
import { TicketItemComponent } from "./ticket-list/ticket-item/ticket-item.component";

const appRoutes: Routes = [
	{ path: "", component: TicketListComponent, children: [
		{ path: ":id", component: TicketItemComponent }
	] }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}