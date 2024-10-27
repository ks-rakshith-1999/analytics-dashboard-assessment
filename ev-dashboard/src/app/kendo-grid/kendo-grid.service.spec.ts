import { TestBed } from '@angular/core/testing';

import { KendoGridService } from './kendo-grid.service';

describe('KendoGridService', () => {
  let service: KendoGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KendoGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
