import { TestBed } from '@angular/core/testing';

import { FetchNotesServiceService } from './fetch-notes-service.service';

describe('FetchNotesServiceService', () => {
  let service: FetchNotesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchNotesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
