import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(
    private http: HttpClient
  ) {
    console.log("Servicio Members!");
  }

/*
* To do request to API REST
* Get all members
*/
getAllMembers() {
    return this.http.get(environment.apiUrl + 'member/all');
}

}
