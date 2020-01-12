import { TestBed } from '@angular/core/testing';

import { FictionService } from './fiction.service';

describe('FictionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FictionService = TestBed.get(FictionService);
    expect(service).toBeTruthy();
  });
});
