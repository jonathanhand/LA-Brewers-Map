import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PlaceService } from './place.service';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(placeService) {
        this.placeService = placeService;
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.loadedPlaces = this.placeService.places;
    };
    Tab1Page.prototype.ionViewWillEnter = function () {
        this.loadedPlaces = this.placeService.places;
    };
    Tab1Page.prototype.onFilterUpdate = function (event) {
        console.log(event.detail);
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PlaceService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map