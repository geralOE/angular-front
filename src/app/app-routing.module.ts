import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { MembersComponent } from './components/members/members.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'members', component: MembersComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'teams' },
];
//{ path: '**', component: PageNotFoundComponent },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
