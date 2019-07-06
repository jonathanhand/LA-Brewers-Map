import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
var PlaceService = /** @class */ (function () {
    function PlaceService(http) {
        this.http = http;
        this._places = [
            new Place('p1', 'L.A. Brewers Win Big', 
            // tslint:disable-next-line: max-line-length
            '31 medals were awarded to 17 breweries in the Los Angeles County Brewers Guild at this year’s San Diego International Beer Competition including the honors of 2019 Champion Brewery to Angel City Brewery. ', '../assets/brew-imgs/SDBeer.jpg'),
            new Place('p2', 'L.A. Brewers Take Home Six GABF Medals', '2018 Great American Beer Festival held in Denver, Colorado', '../assets/brew-imgs/medals.png'),
            new Place('p3', 'Griffith Park Run 5k', 'Independent Beer Garden Run', '../assets/brew-imgs/5krun.jpg'),
        ];
    }
    Object.defineProperty(PlaceService.prototype, "places", {
        get: function () {
            var _this = this;
            console.log('getting thru http get');
            this.http.get('https://beachbnb-93d74.firebaseio.com/place.json').subscribe(function (res) {
                _this.data = res;
                console.log(_this.data);
            });
            return this._places.slice();
        },
        enumerable: true,
        configurable: true
    });
    PlaceService.prototype.getPlace = function (id) {
        return tslib_1.__assign({}, this._places.find(function (p) { return p.id === id; }));
    };
    PlaceService.prototype.addPlace = function (title, description, price, dateFrom, dateTo) {
        var newPlace = new Place(Math.random().toString(), title, description, '../assets/imgs/nyc.jpg');
        this.http.post('https://beachbnb-93d74.firebaseio.com/place.json', tslib_1.__assign({}, newPlace, { id: null }))
            .subscribe(function (response) {
            console.log(response);
        });
        this._places.push(newPlace);
        console.log(this._places);
    };
    PlaceService.prototype.updateOffer = function (placeId, title, description) {
        var updatedPlaceIndex = this._places.findIndex(function (pl) { return pl.id === placeId; });
        var updatedPlace = this._places.slice();
        var oldPlace = updatedPlace[updatedPlaceIndex];
        updatedPlace[updatedPlaceIndex] = new Place(oldPlace.id, title, description, oldPlace.image);
        this._places.splice(updatedPlaceIndex, 1);
        this._places.push(updatedPlace[updatedPlaceIndex]);
    };
    PlaceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PlaceService);
    return PlaceService;
}());
export { PlaceService };
//# sourceMappingURL=place.service.js.map