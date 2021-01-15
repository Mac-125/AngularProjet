import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { RegionComponent } from './region/region.component';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [
  {​​​​​ path:'',component:HomeComponent}​​​​​,
  {​​​​​ path:'home',component:HomeComponent}​​​​​,
  {​​​​​ path:'regions',component:RegionsComponent}​​​​​,
  {​​​​​ path:'countries',component:CountryComponent}​​​​​,
  {​​​​​ path:'countries/:region',component:RegionComponent}​​​​​,
  {​​​​​ path:'country/:pay',component:DetailsComponent}​​​​​,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
