import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FormComponent } from './Components/form/form.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { TestCompComponent } from './Components/test-comp/test-comp.component';
import { RouterModule } from '@angular/router';
import { Signup1Component } from './Components/signup1/signup1.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './Components/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FormComponent,
    NavbarComponent,
    HomeComponent,
    TestCompComponent,
    Signup1Component,
    ApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
