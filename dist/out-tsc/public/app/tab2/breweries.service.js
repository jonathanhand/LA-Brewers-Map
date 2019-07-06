import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Brewery } from './brewery.model';
import { HttpClient } from '@angular/common/http';
var BreweryService = /** @class */ (function () {
    function BreweryService(http) {
        this.http = http;
        this._breweries = [
            new Brewery('b1', '14 Cannons', '31125 Via Colinas, Westlake Village, 91362', 'Location: Brewery/Tasting Room'),
            new Brewery('b2', 'Hand-Brewed Beer', '9771 Variel Avenue, Los Angeles, 91311', 'Location: Brewery/Tasting Room')
        ];
    }
    Object.defineProperty(BreweryService.prototype, "breweries", {
        get: function () {
            var _this = this;
            console.log('getting thru http get');
            this.http.get('https://beachbnb-93d74.firebaseio.com/place.json').subscribe(function (res) {
                _this.data = res;
                console.log(_this.data);
            });
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