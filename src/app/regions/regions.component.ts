import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  constructor(private httpService: HttpService,
    private router: Router) { }

  ngOnInit(): void {
  }
  goRegion(region: any){
    this.router.navigate(['countries',region]);


  }

}
