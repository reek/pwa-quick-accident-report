import { TestBed } from '@angular/core/testing';

import { AccidentService } from './accident.service';

describe('AccidentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccidentService = TestBed.get(AccidentService);
    expect(service).toBeTruthy();
  });
});
