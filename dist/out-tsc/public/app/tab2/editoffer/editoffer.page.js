import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from 'src/app/tab1/place.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
var EditofferPage = /** @class */ (function () {
    function EditofferPage(route, placeService, router) {
        this.route = route;
        this.placeService = placeService;
        this.router = router;
    }
    EditofferPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('placeId');
        this.place = this.placeService.getPlace(this.id);
        this.form = new FormGroup({
            title: new FormControl(this.place.title, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            description: new FormControl(this.place.description, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.maxLength(180)]
            }),
        });
    };
    EditofferPage.prototype.onEditOffer = function () {
        console.log(this.form);
        this.placeService.updateOffer(this.id, this.form.value.title, this.form.value.description);
        this.form.reset();
        this.router.navigate(['/tabs/tab1']);
    };
    EditofferPage = tslib_1.__decorate([
        Component({
            selector: 'app-editoffer',
            templateUrl: './editoffer.page.html',
            styleUrls: ['./editoffer.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            PlaceService,
            Router])
    ], EditofferPage);
    return EditofferPage;
}());
export { EditofferPage };
//# sourceMappingURL=editoffer.page.js.map