import { TestBed } from '@angular/core/testing';

import { EasyZoomService } from './easy-zoom.service';

describe('EasyZoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasyZoomService = TestBed.get(EasyZoomService);
    expect(service).toBeTruthy();
  });
});
