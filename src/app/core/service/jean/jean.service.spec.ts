import { TestBed } from '@angular/core/testing';

import { JeanService } from './jean.service';

describe('JeanService', () => {
  let service: JeanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
