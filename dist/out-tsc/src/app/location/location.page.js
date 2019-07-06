import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { BreweryService } from '../tab2/breweries.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
var LocationPage = /** @class */ (function () {
    function LocationPage(breweryService, geolocation, nativeGeocoder) {
        this.breweryService = breweryService;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
    }
    LocationPage.prototype.ngOnInit = function () {
        this.loadedBreweries = this.breweryService.getBreweries();
        // tslint:disable-next-line: forin
    };
    LocationPage.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.map.addListener('tilesloaded', function () {
                console.log('accuracy', _this.map);
                _this.getAddressFromCoords(_this.map.center.lat(), _this.map.center.lng());
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    LocationPage.prototype.getAddressFromCoords = function (lattitude, longitude) {
        var _this = this;
        console.log('getAddressFromCoords ' + lattitude + ' ' + longitude);
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
            .then(function (result) {
            _this.address = '';
            var responseAddress = [];
            for (var _i = 0, _a = Object.entries(result[0]); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (value.length > 0) {
                    responseAddress.push(value);
                }
            }
            responseAddress.reverse();
            for (var _c = 0, responseAddress_1 = responseAddress; _c < responseAddress_1.length; _c++) {
                var value = responseAddress_1[_c];
                _this.address += value + ', ';
            }
            _this.address = _this.address.slice(0, -2);
        })
            .catch(function (error) {
            _this.address = 'Address Not Available!';
        });
        // this.map = new google.maps.Map(
        //   this.mapElement.nativeElement,
        //   {
        //     center: {lat: 33.794301, lng: -118.1634546},
        //     zoom: 10
        //   });
        // // tslint:disable-next-line: forin
        // var marker = new google.maps.Marker({
        //     position: {lat:33.7013251, lng: -118.1634546},
        //     map: this.map,
        //     title: 'Hello World!'
        // });
    };
    tslib_1.__decorate([
        ViewChild('mapElement'),
        tslib_1.__metadata("design:type", Object)
    ], LocationPage.prototype, "mapElement", void 0);
    LocationPage = tslib_1.__decorate([
        Component({
            selector: 'app-location',
            templateUrl: './location.page.html',
            styleUrls: ['./location.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [BreweryService,
            Geolocation,
            NativeGeocoder])
    ], LocationPage);
    return LocationPage;
}());
export { LocationPage };
//# sourceMappingURL=location.page.js.map