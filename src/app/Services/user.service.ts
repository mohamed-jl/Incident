import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environement/enviroment';
import { user } from 'src/Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {}

  getAllUsers():Observable<user[]>{
    return this.httpClient.get<user[]>(`${enviroment.apiUrl}/users`)
  }

  getUserById(id:any):Observable<user>{
    return this.httpClient.get<user>(`${enviroment.apiUrl}/users/`+id)
  }

  deleteUserById(id:any):void{
    this.httpClient.delete(`${enviroment.apiUrl}/users/`+id)
  }

  addUser(user:user):void{
    this.httpClient.post(`${enviroment.apiUrl}/users`,user)
  }

  updateuser(user:user,id:any):void{
    this.httpClient.put(`${enviroment.apiUrl}/users/`+id,user)
  }
  
}
