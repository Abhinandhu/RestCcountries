import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http";


@Injectable()
export class RestHttpService {

  public allCountries;
  public currentCountry;

  public baseUrl = 'https://restcountries.eu/rest/v2'

  public getAllCountries():any{
    let myResponse = this._http.get(this.baseUrl + '/all')
    console.log(myResponse)
    return myResponse;
  }

  public getCountries(currentCountryName): any {
    for(let country of this.allCountries){
      if(country.name == currentCountryName){
        this.currentCountry = country;
      }
    }
    return this.currentCountry;
  }

  constructor(private _http:HttpClient) { }

}
