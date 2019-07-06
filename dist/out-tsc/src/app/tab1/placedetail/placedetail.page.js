import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../place.service';
var PlacedetailPage = /** @class */ (function () {
    function PlacedetailPage(route, placeService) {
        this.route = route;
        this.placeService = placeService;
    }
    // private router: Router,
    // private modalCtrl: ModalController,
    // private ActionSheetCtrl: ActionSheetController,
    // private bookingService: BookingService) { }
    PlacedetailPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('placeId');
        this.place = this.placeService.getPlace(this.id);
    };
    PlacedetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-placedetail',
            templateUrl: './placedetail.page.html',
            styleUrls: ['./placedetail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            PlaceService])
    ], PlacedetailPage);
    return PlacedetailPage;
}());
export { PlacedetailPage };
//# sourceMappingURL=placedetail.page.js.map