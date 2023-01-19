import { TestBed } from '@angular/core/testing';

import { ShareUiService } from './share-ui.service';

describe('ShareUiService', () => {
  let service: ShareUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
