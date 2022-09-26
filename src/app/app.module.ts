import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { Routes } from '@angular/router';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { ServerViewComponent } from './servers/server-view/server-view.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';
import { ServerService } from './servers/server-services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    ServerEditComponent,
    ServerViewComponent,
    UsersComponent,
    ViewUsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ServerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
