import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitoAtualizarComponent } from './leito-atualizar.component';

describe('LeitoAtualizarComponent', () => {
  let component: LeitoAtualizarComponent;
  let fixture: ComponentFixture<LeitoAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitoAtualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitoAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
