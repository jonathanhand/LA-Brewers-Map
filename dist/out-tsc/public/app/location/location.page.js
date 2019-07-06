import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
var LocationPage = /** @class */ (function () {
    function LocationPage() {
    }
    LocationPage.prototype.ngOnInit = function () {
    };
    LocationPage.prototype.ngAfterContentInit = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: 33.794301, lng: -118.1634546 },
            zoom: 10
        });
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
        tslib_1.__metadata("design:paramtypes", [])
    ], LocationPage);
    return LocationPage;
}());
export { LocationPage };
//# sourceMappingURL=location.page.js.map