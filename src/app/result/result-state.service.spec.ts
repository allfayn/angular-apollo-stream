import { TestBed } from '@angular/core/testing';

import { ResultStateService } from './result-state.service';

describe('ResultStateService', () => {
  let service: ResultStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
