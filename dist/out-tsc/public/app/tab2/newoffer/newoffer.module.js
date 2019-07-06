import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewofferPage } from './newoffer.page';
var routes = [
    {
        path: '',
        component: NewofferPage
    }
];
var NewofferPageModule = /** @class */ (function () {
    function NewofferPageModule() {
    }
    NewofferPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [NewofferPage]
        })
    ], NewofferPageModule);
    return NewofferPageModule;
}());
export { NewofferPageModule };
//# sourceMappingURL=newoffer.module.js.map