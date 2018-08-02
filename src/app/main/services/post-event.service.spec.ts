import { TestBed, inject } from '@angular/core/testing';

import { PostEventService } from './post-event.service';

describe('PostEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostEventService]
    });
  });

  it('should be created', inject([PostEventService], (service: PostEventService) => {
    expect(service).toBeTruthy();
  }));
});
