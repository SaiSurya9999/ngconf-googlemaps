import { TestBed } from '@angular/core/testing';

import { NgconfGooglemapService } from './ngconf-googlemap.service';

describe('NgconfGooglemapService', () => {
  let service: NgconfGooglemapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgconfGooglemapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
