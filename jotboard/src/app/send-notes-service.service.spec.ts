import { TestBed } from '@angular/core/testing';

import { SendNotesServiceService } from './send-notes-service.service';

describe('SendNotesServiceService', () => {
  let service: SendNotesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendNotesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
