import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BreweryService } from './breweries.service';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(breweryService) {
        this.breweryService = breweryService;
    }
    Tab2Page.prototype.ngOnInit = function () {
        this.loadedBreweries = this.breweryService.getBreweries();
        console.log(this.loadedBreweries);
    };
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [BreweryService])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map