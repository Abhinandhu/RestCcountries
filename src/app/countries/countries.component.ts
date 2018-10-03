import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { RestService } from '../rest.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public allCountries;
  public currentCountry;

  constructor(private _route: ActivatedRoute, private router: Router, public restService: RestService) { }

  ngOnInit() {

    let countryName = this._route.snapshot.paramMap.get('name');
    console.log(countryName)
    this.currentCountry=this.restService.getCountries(countryName);
    console.log(this.currentCountry)

  }

}
