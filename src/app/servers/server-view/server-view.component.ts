import { Component, OnInit } from '@angular/core';
import { UsersInformation } from '../../share/users';
import { ServerService } from '../server-services';

@Component({
  selector: 'app-server-view',
  templateUrl: './server-view.component.html',
  styleUrls: ['./server-view.component.css'],
})
export class ServerViewComponent implements OnInit {
  servers!: UsersInformation[];
  constructor(private services: ServerService) {}

  ngOnInit() {
    this.servers = this.services.getUserInformation();
  }
}
