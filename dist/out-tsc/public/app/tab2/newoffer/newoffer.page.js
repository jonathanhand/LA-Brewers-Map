import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlaceService } from 'src/app/tab1/place.service';
import { Router } from '@angular/router';
var NewofferPage = /** @class */ (function () {
    function NewofferPage(placeService, router) {
        this.placeService = placeService;
        this.router = router;
    }
    NewofferPage.prototype.ngOnInit = function () {
        this.form = new FormGroup({
            title: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            description: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.maxLength(180)]
            }),
            price: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.min(1)]
            }),
            availableFrom: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            availableTo: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
        });
    };
    NewofferPage.prototype.onCreateOffer = function () {
        console.log(this.form.value);
        this.placeService.addPlace(this.form.value.title, this.form.value.description, this.form.value.price, new Date(this.form.value.availableFrom), new Date(this.form.value.availableTo));
        this.form.reset();
        this.router.navigate(['/tabs/tab1']);
    };
    NewofferPage = tslib_1.__decorate([
        Component({
            selector: 'app-newoffer',
            templateUrl: './newoffer.page.html',
            styleUrls: ['./newoffer.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PlaceService,
            Router])
    ], NewofferPage);
    return NewofferPage;
}());
export { NewofferPage };
//# sourceMappingURL=newoffer.page.js.map