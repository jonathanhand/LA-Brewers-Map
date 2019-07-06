import { TestBed } from '@angular/core/testing';
import { BreweryService } from './breweries.service';
describe('BreweriesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(BreweryService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=breweries.service.spec.js.map