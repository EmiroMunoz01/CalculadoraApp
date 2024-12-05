import { TestBed } from '@angular/core/testing';

import { ConcretoService } from './concreto.service';

describe('ConcretoService', () => {
  let service: ConcretoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcretoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
