import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { MembersComponent } from './components/members/members.component';
import { AddMemberComponent } from './components/members/add-member/add-member.component';
import { AddTeamComponent } from './components/teams/add-team/add-team.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/add', component: AddTeamComponent },
  { path: 'members', component: MembersComponent },
  { path: 'members/add', component: AddMemberComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'teams' },
];
//{ path: '**', component: PageNotFoundComponent },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
