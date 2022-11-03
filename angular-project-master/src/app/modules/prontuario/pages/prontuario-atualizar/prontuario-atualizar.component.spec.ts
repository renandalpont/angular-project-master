import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioAtualizarComponent } from './prontuario-atualizar.component';

describe('ProntuarioAtualizarComponent', () => {
  let component: ProntuarioAtualizarComponent;
  let fixture: ComponentFixture<ProntuarioAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProntuarioAtualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProntuarioAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
