import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

import{} from 'googlemaps';
@Component({
  selector: 'app-view-on-maps',
  templateUrl: './view-on-maps.component.html',
  styleUrls: ['./view-on-maps.component.scss']
})
export class ViewOnMapsComponent implements OnInit {

  constructor(
    private homeService: HomeService
  ) { }

  latitude=26.996471;
  longitude=75.8513;

  stopList:any=[];
  zoom=11;

  ngOnInit(): void {
    this.stopList = this.homeService.getRouteData().stops;   
    // if(this.homeService.getRouteData().direction == 'up'){
    //   this.latitude = this.stopList[0].latitude;
    //   this.longitude = this.stopList[0].longitude;

    // } else{
    //   const n = this.stopList.length;
    //   this.latitude = this.stopList[n].latitude;
    //   this.longitude = this.stopList[n].longitude;

    // }
  }

  onChooseLocation(data:any){
    console.log(data);
    this.latitude = data.cords.lat;
    this.longitude = data.cords.lng;

  }

}
