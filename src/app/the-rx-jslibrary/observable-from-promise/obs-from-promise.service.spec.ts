import { TestBed } from '@angular/core/testing';

import { ObsFromPromiseService } from './obs-from-promise.service';

describe('ObsFromPromiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObsFromPromiseService = TestBed.get(ObsFromPromiseService);
    expect(service).toBeTruthy();
  });
});
