import { Component, OnInit } from '@angular/core';

import { RestService } from '../rest.service';
import { RestHttpService } from '../rest-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public regions : any = []
  public allCountries;

  constructor(public restHttpService: RestHttpService) { }

  ngOnInit() {
    this.regions = ['Africa', 'North America','South America','Asia', 'Europe', 'Oceania','Antarctica'];
    this.allCountries = this.restHttpService.getAllCountries;
  }

  public allRegions = [
    {"name": "Africa"},
    {"name": "Europe"},
    {"name": "Asia"},
    {"name": "North America"},
    {"name": "South America"},
    {"name": "Oceania"},
    {"name": "Antarctica"}
  ]

}
