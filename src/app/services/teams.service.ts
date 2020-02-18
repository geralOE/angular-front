import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(
    private http: HttpClient
  ) {
    console.log("Servicio Teams!");
  }

/*
* To do request to API REST
* Get all teams
*/
  getTeams() {
    return this.http.get(environment.apiUrl + 'team?limit=50');
  }

}
