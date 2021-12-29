import { TestBed } from '@angular/core/testing';

import { UzsakymasService } from './uzsakymas.service';

describe('UzsakymasService', () => {
  let service: UzsakymasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UzsakymasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
