import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersInformation } from '../share/users';
import { ServerService } from './server-services';
// import { ServerService } from './server-services';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  servers!: UsersInformation[];
  constructor(private route: Router, private users: ServerService) {}

  ngOnInit() {
    this.servers = this.users.getUserInformation();
  }
  onReload() {
    this.route.navigate(['/server']);
    // console.log(this.servers);
    // console.log(this.services.getUserInformation());
  }
}
