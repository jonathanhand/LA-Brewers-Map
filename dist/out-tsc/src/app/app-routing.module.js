import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'placedetail', loadChildren: './tab1/placedetail/placedetail.module#PlacedetailPageModule' },
    { path: 'offerdetail', loadChildren: './tab2/offerdetail/offerdetail.module#OfferdetailPageModule' },
    { path: 'newoffer', loadChildren: './tab2/newoffer/newoffer.module#NewofferPageModule' },
    { path: 'editoffer', loadChildren: './tab2/editoffer/editoffer.module#EditofferPageModule' },
    { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
    { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
    { path: 'location', loadChildren: './location/location.module#LocationPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map