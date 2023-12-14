import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {

  constructor(private api:ApiService){}
  res:string="...";
  incidentsData:any;

  ngOnInit(): void {
    this.fetchTrafficIncidents();
  }

  fetchTrafficIncidents() {
    this.api.getTrafficIncidents().subscribe(
      (data) => {
        console.log("fetching..")
        this.incidentsData = data;
        console.log('Traffic incidents data:', this.incidentsData);
        // Handle data or update your UI accordingly
      },
      (error) => {
        console.log("err..")
        console.error('Error fetching traffic incidents:', error);
        // Handle error
      }
    );
  }
  OnClick(){
    this.res=this.incidentsData;
  }



}
