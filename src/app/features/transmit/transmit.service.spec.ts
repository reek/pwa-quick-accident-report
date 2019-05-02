import { TestBed } from '@angular/core/testing';

import { TransmitService } from './transmit.service';

describe('TransmitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransmitService = TestBed.get(TransmitService);
    expect(service).toBeTruthy();
  });
});
