import { TestBed } from '@angular/core/testing';

import { BancoService } from './banco.service';

describe('CervejaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BancoService = TestBed.get(BancoService);
    expect(service).toBeTruthy();
  });
});
