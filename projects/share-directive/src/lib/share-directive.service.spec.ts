import { TestBed } from '@angular/core/testing';

import { ShareDirectiveService } from './share-directive.service';

describe('ShareDirectiveService', () => {
  let service: ShareDirectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareDirectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
