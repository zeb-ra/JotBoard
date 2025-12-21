import { TestBed } from '@angular/core/testing';

import { UpdateNotesServiceService } from './update-notes-service.service';

describe('UpdateNotesServiceService', () => {
  let service: UpdateNotesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateNotesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
