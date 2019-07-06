import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PlacedetailPage } from './placedetail.page';
var routes = [
    {
        path: '',
        component: PlacedetailPage
    },
    {
        path: ':placeId',
        component: PlacedetailPage
    }
];
var PlacedetailPageModule = /** @class */ (function () {
    function PlacedetailPageModule() {
    }
    PlacedetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PlacedetailPage]
        })
    ], PlacedetailPageModule);
    return PlacedetailPageModule;
}());
export { PlacedetailPageModule };
//# sourceMappingURL=placedetail.module.js.map