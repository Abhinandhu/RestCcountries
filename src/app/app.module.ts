import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { AboutComponent } from './about/about.component';

import { RestService } from './rest.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RestHttpService } from './rest-http.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesComponent,
    SingleCountryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path: 'about', component: AboutComponent},
      {path: 'region/:name',component : CountriesComponent}
    ])
  ],
  providers: [RestService,RestHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
