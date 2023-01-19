import { TestBed } from '@angular/core/testing';

import { ModelInterfaceService } from './model-interface.service';

describe('ModelInterfaceService', () => {
  let service: ModelInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
