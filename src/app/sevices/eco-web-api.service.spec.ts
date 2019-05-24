import { TestBed } from '@angular/core/testing';

import { EcoWebApiService } from './eco-web-api.service';

describe('EcoWebApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EcoWebApiService = TestBed.get(EcoWebApiService);
    expect(service).toBeTruthy();
  });
});
