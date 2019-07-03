import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { Brewery } from '../tab2/brewery.model';
import { BreweryService } from '../tab2/breweries.service';
declare var google;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit, AfterContentInit {
  loadedBreweries: Brewery[];
  constructor(private breweryService: BreweryService) {}
  map;

  @ViewChild('mapElement') mapElement;

  ngOnInit(): void {
    this.loadedBreweries = this.breweryService.getBreweries();
// tslint:disable-next-line: forin
  }
  ngAfterContentInit(): void {

    this.map = new google.maps.Map(

      this.mapElement.nativeElement,
      {
        center: {lat: 33.794301, lng: -118.1634546},
        zoom: 10
      });
// tslint:disable-next-line: forin

    var marker = new google.maps.Marker({
        position: {lat:33.7013251, lng: -118.1634546},
        map: this.map,
        title: 'Hello World!'
      });

  }
}


