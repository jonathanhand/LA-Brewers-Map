import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from 'src/app/tab1/place.service';
var OfferdetailPage = /** @class */ (function () {
    function OfferdetailPage(route, placeService) {
        this.route = route;
        this.placeService = placeService;
    }
    OfferdetailPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('placeId');
        this.place = this.placeService.getPlace(this.id);
    };
    OfferdetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-offerdetail',
            templateUrl: './offerdetail.page.html',
            styleUrls: ['./offerdetail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            PlaceService])
    ], OfferdetailPage);
    return OfferdetailPage;
}());
export { OfferdetailPage };
//# sourceMappingURL=offerdetail.page.js.map