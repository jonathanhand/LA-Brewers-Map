import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Brewery } from './brewery.model';
import { HttpClient } from '@angular/common/http';
var BreweryService = /** @class */ (function () {
    function BreweryService(http) {
        this.http = http;
        this._breweries = [
        // new Brewery(
        //   'b1',
        //   '14 Cannons',
        //   '31125 Via Colinas, Westlake Village, 91362',
        //   'Location: Brewery/Tasting Room'
        // ),
        // new Brewery(
        //   'b2',
        //   'Hand-Brewed Beer',
        //   '9771 Variel Avenue, Los Angeles, 91311',
        //   'Location: Brewery/Tasting Room'
        // )
        //commented out because using http request to firebase to get data
        ];
    }
    BreweryService.prototype.getBreweries = function () {
        var _this = this;
        console.log('getting thru http get');
        this.http.get('https://la-brewers.firebaseio.com/breweries.json')
            .subscribe(function (res) {
            // tslint:disable-next-line: forin
            for (var j in res) {
                var newBrewery = new Brewery(j, res[j].name, res[j].address, res[j].location);
                _this._breweries.push(newBrewery);
            }
        });
        return this._breweries;
    };
    Object.defineProperty(BreweryService.prototype, "breweries", {
        get: function () {
            return this._breweries.slice();
        },
        enumerable: true,
        configurable: true
    });
    BreweryService.prototype.getPlace = function (id) {
        return tslib_1.__assign({}, this._breweries.find(function (b) { return b.id === id; }));
    };
    BreweryService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], BreweryService);
    return BreweryService;
}());
export { BreweryService };
//# sourceMappingURL=breweries.service.js.map