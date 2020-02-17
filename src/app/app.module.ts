import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailTeamComponent } from './components/teams/detail-team/detail-team.component';
import { MembersComponent } from './components/members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeamsComponent,
    PageNotFoundComponent,
    DetailTeamComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
