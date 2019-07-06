import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Place } from 'src/app/tab1/place.model';
var OfferitemComponent = /** @class */ (function () {
    function OfferitemComponent() {
    }
    OfferitemComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Place)
    ], OfferitemComponent.prototype, "offer", void 0);
    OfferitemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-offeritem',
            templateUrl: './offeritem.component.html',
            styleUrls: ['./offeritem.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], OfferitemComponent);
    return OfferitemComponent;
}());
export { OfferitemComponent };
//# sourceMappingURL=offeritem.component.js.map