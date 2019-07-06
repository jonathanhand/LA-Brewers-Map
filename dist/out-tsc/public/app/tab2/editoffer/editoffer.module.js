import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EditofferPage } from './editoffer.page';
var routes = [
    {
        path: '',
        component: EditofferPage
    },
    {
        path: ':placeId',
        component: EditofferPage
    }
];
var EditofferPageModule = /** @class */ (function () {
    function EditofferPageModule() {
    }
    EditofferPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EditofferPage]
        })
    ], EditofferPageModule);
    return EditofferPageModule;
}());
export { EditofferPageModule };
//# sourceMappingURL=editoffer.module.js.map