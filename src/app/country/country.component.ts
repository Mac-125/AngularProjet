import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries!: any[];

  constructor(private HttpService:HttpService) { }

  ngOnInit(): void {

     this.countries = this.HttpService.getallCountries();
    // console.log(this.countries);

  }

}
