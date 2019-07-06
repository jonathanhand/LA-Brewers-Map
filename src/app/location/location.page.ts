import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { Brewery } from '../tab2/brewery.model';
import { BreweryService } from '../tab2/breweries.service';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult,  NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { BoundTextAst } from '@angular/compiler';
import { markParentViewsForCheck } from '@angular/core/src/view/util';
declare var google;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit, AfterContentInit {
  loadedBreweries: Brewery[];
  constructor(private breweryService: BreweryService,
              private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder) {}

  @ViewChild('mapElement') mapElement;
  map: any;
  address: string;
  geocoder: any;
  latCode: any;
  lngCode: any;



  ngOnInit(): void {
    this.loadedBreweries = this.breweryService.getBreweries();
// tslint:disable-next-line: forin
  }
  ngAfterContentInit(): void {
    let locationMarker;
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latCode = resp.coords.latitude;
      this.lngCode = resp.coords.longitude;
      const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      const mapOptions = {
        center: latLng,
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };


      this.map = new google.maps.Map(document.getElementById('googMap'), mapOptions);

      this.map.addListener('tilesloaded', () => {
      locationMarker = new google.maps.Marker({
        map: this.map,
        position: latLng,
        title: 'Current Location',
        label: 'C'
      });
      
      this.geocoder = new google.maps.Geocoder();
      const address = '36232 42nd st e palmdale, ca';

// tslint:disable-next-line: forin
      for (const each in this.loadedBreweries) {
        this.createMarker(each);
        }
      });
      this.map.addListener('center_changed', () => {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function() {
          console.log('center changed...3 secs!');

        }, 3000);
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  // creates marker and infowindow so no namespace pollution
createMarker(each) {
  const marker = new google.maps.Marker({
    map: this.map,
    position: {lat: Number(this.loadedBreweries[each].lat), lng: Number(this.loadedBreweries[each].lng)},
    title: this.loadedBreweries[each].name
  });
  const infowindow = new google.maps.InfoWindow({
    content: '<span>' + this.loadedBreweries[each].name + '</span></br>'
    + '<span>' + this.loadedBreweries[each].address + '</span></br>'
    + '<span>' + this.loadedBreweries[each].location + '</span>'
});


  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(this.map, this);
    this.map.setZoom(14);
    this.map.panTo(marker.getPosition());
  });
}
// for getting geocode. stopped using because of google request limit
getCoord(address, geocoder, map) {
    geocoder.geocode( { address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        const marker = new google.maps.Marker({
            map,
            position: results[0].geometry.location
        });
        console.log(results[0].geometry.location);
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
  }


