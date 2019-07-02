import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
declare var google;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit, AfterContentInit {
  map;
  @ViewChild('mapElement') mapElement;
  constructor() { }

  ngOnInit(): void{
  }
  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        center: {lat: 33.794301, lng: -118.1634546},
        zoom: 10
      }); 
  }
}
