import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'server', component: ServersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id/:name', component: ViewUsersComponent },
  { path: 'server/:id/edit', component: ServerEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
