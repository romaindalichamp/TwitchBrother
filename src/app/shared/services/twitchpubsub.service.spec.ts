import { TestBed } from '@angular/core/testing';

import { TwitchpubsubService } from './twitchpubsub.service';

describe('TwitchpubsubService', () => {
  let service: TwitchpubsubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitchpubsubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
