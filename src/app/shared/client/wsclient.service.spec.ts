import {TestBed} from '@angular/core/testing';

import {WsclientService} from './wsclient.service';

describe('WsclientService', () => {
  let service: WsclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
