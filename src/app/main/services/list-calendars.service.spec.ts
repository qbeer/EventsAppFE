import { TestBed, inject } from '@angular/core/testing';

import { ListCalendarsService } from './list-calendars.service';

describe('ListCalendarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListCalendarsService]
    });
  });

  it('should be created', inject([ListCalendarsService], (service: ListCalendarsService) => {
    expect(service).toBeTruthy();
  }));
});
