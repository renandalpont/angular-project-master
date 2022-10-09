import { TestBed } from '@angular/core/testing';

import { TreinadorService } from './treinador.service';

describe('ServiceService', () => {
  let service: TreinadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreinadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
