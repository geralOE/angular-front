import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailTeamComponent } from './components/teams/detail-team/detail-team.component';
import { MembersComponent } from './components/members/members.component';
import { AddMemberComponent } from './components/members/add-member/add-member.component';
import { AddTeamComponent } from './components/teams/add-team/add-team.component';

import { MembersService } from './services/members.service';
import { TeamsService } from './services/teams.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeamsComponent,
    PageNotFoundComponent,
    DetailTeamComponent,
    MembersComponent,
    AddMemberComponent,
    AddTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TeamsService,
    MembersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
