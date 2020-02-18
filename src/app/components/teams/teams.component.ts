import { Component, OnInit } from '@angular/core';
import {TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.sass']
})

export class TeamsComponent implements OnInit {

  allTeams = [];

  constructor(
      private teamsService: TeamsService
    ) {}

  ngOnInit() {
    this.teamsService.getTeams()
    .subscribe((data) => {
      this.allTeams= data['data']
      console.log(this.allTeams)
    }, (error) => {
      console.log(error)
    })
  }

_


}
