import { TestBed } from '@angular/core/testing';

import { CervejaService } from './banco.service';

describe('CervejaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CervejaService = TestBed.get(CervejaService);
    expect(service).toBeTruthy();
  });
});
