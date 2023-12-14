import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component {
  userData={
    username:"",
    password: "",
    FirstName:"",
    LastName:"",}
    checkPassword:any;
  
    constructor(private http: HttpClient , private router:Router) { }
  
  
    onSubmit(){
    }

}
