import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  region="";
  country: any[] = [];
  constructor(private route: ActivatedRoute,
    private httpService: HttpService,) { }

  ngOnInit(): void {this.route.params.subscribe(event => {
    this.region=event.region;
   });
   this.country=this.httpService.getCountries(this.region);
   console.log(this.country);

  }

}
