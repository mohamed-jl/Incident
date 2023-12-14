import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from 'src/app/Components/signup/signup.component'; 
import { TestCompComponent } from './Components/test-comp/test-comp.component';
import { Signup1Component } from './Components/signup1/signup1.component';

const routes : Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'signup1',component:Signup1Component},
  {path:'home',component:HomeComponent},
  {path:'test',component:TestCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
