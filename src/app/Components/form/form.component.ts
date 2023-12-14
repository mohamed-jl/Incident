import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
//import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private router:Router){}

  userData={
    username:"",
    password:""
  }
onSubmit(){}
  //constructor(private http: HttpClient , private authService: AuthService,private router: Router) { }


 /* onSubmit(){
     this.http.post('https://localhost:8080/', this.userData)
      .subscribe(
        (response) => {
          console.log('Login successful!', response);
        },
        (error) => {
          console.error('Login failed!', error);
        }
      ); 
      this.authService.login(this.userData.username, this.userData.password).subscribe(
        (response) => {
          this.router.navigate(['/home'])
        },
        (error) => {
          alert("erreur")
        }
      )

  }*/

}
