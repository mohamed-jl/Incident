import { Component } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  data: any={};
  viper:string="";
  sova:string="";

  constructor(private http: HttpClient) { }

  public ngOnInit():void{
    

  }

  
  
}





