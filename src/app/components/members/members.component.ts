import { Component, OnInit } from '@angular/core';
import {MembersService } from '../../services/members.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass']
})
export class MembersComponent implements OnInit {
  allMembers = [];

  constructor(
    private membersService: MembersService
  ) { }

  ngOnInit() {
      this.membersService.getAllMembers()
      .subscribe((data) => {
        this.allMembers= data['data']
        console.log(this.allMembers)
      }, (error) => {
        console.log(error)
      })
  }

}
