import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://api.tomtom.com/traffic/services/5/incidentDetails?key=v8ZAJNvJ1Gi7cOvCiyb7hbz0bRCANpCE&bbox=2.2,48.8,2.6,48.9&fields=incidents{type,geometry{type,coordinates},properties{iconCategory}}&language=en-GB&timeValidityFilter=present';

  constructor(private http: HttpClient) { }

  getTrafficIncidents(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
