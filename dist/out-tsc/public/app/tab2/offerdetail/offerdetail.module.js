import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OfferdetailPage } from './offerdetail.page';
var routes = [
    {
        path: '',
        component: OfferdetailPage
    },
    {
        path: ':placeId',
        component: OfferdetailPage
    }
];
var OfferdetailPageModule = /** @class */ (function () {
    function OfferdetailPageModule() {
    }
    OfferdetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [OfferdetailPage]
        })
    ], OfferdetailPageModule);
    return OfferdetailPageModule;
}());
export { OfferdetailPageModule };
//# sourceMappingURL=offerdetail.module.js.map