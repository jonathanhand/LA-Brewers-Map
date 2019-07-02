import { TestBed } from '@angular/core/testing';

import { BreweryService } from './breweries.service';

describe('BreweriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreweryService = TestBed.get(BreweryService);
    expect(service).toBeTruthy();
  });
});
