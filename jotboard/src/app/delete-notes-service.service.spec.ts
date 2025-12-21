import { TestBed } from '@angular/core/testing';

import { DeleteNotesServiceService } from './delete-notes-service.service';

describe('DeleteNotesServiceService', () => {
  let service: DeleteNotesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteNotesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
