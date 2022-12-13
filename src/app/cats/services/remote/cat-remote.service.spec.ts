import { TestBed } from '@angular/core/testing';

import { CatRemoteService } from './cat-remote.service';

describe('CatRemoteService', () => {
  let service: CatRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatRemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
