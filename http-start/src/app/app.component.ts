import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Server } from './server.model';
import { ServerService } from './server.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	appName = this.serverService.getAppName();
	servers: Server[] = [
		new Server('Testserver', 10, this.generateId()),
		new Server('Liveserver', 100, this.generateId())
	];

	constructor(private serverService: ServerService) {}

	onAddServer(name: string): void {
		this.servers.push(new Server(name, 50, this.generateId()));
	}

	onSave() {
		this.serverService.storeServers(this.servers).subscribe(
			(response: Response) => {
				console.log(response);
			},
			(error) => console.log(error)
		);
	}

	onGet() {
		this.serverService.getServers().subscribe(
			(servers: any[]) => {
				console.log(servers);
				this.servers = servers;
			},
			(error) => console.log(error)
		);
	}

	private generateId(): number {
		return Math.round(Math.random() * 10000);
	}
}
