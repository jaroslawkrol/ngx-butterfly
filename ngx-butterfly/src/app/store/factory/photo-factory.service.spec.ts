import { TestBed, inject } from '@angular/core/testing';

import { PhotoFactoryService } from './photo-factory.service';

describe('PhotoFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoFactoryService]
    });
  });

  it('should be created', inject([PhotoFactoryService], (service: PhotoFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
