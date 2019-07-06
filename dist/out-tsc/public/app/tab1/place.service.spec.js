import { TestBed } from '@angular/core/testing';
import { PlaceService } from './place.service';
describe('PlaceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PlaceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=place.service.spec.js.map