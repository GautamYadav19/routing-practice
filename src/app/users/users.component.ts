import { Component, OnInit } from '@angular/core';
import { ServerService } from '../servers/server-services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor() {}
  test = ['max', 'Will', 'Yum'];
  ngOnInit() {}
}
