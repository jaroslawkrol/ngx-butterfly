import { TestBed, inject } from '@angular/core/testing';

import { ButterflyLibService } from './butterfly-lib.service';

describe('ButterflyLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ButterflyLibService]
    });
  });

  it('should be created', inject([ButterflyLibService], (service: ButterflyLibService) => {
    expect(service).toBeTruthy();
  }));
});
