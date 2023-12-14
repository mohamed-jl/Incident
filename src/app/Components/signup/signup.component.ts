import { Component } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
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
