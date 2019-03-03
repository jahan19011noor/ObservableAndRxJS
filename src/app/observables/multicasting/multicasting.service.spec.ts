import { TestBed } from '@angular/core/testing';

import { MulticastingService } from './multicasting.service';

describe('MulticastingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MulticastingService = TestBed.get(MulticastingService);
    expect(service).toBeTruthy();
  });
});
