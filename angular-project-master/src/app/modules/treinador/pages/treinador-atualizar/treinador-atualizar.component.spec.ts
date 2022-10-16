import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinadorAtualizarComponent } from './treinador-atualizar.component';

describe('TreinadorAtualizarComponent', () => {
  let component: TreinadorAtualizarComponent;
  let fixture: ComponentFixture<TreinadorAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinadorAtualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinadorAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
