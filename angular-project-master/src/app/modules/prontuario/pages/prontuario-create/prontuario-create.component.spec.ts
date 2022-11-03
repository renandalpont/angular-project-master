import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioCreateComponent } from './prontuario-create.component';

describe('ProntuarioCreateComponent', () => {
  let component: ProntuarioCreateComponent;
  let fixture: ComponentFixture<ProntuarioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProntuarioCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProntuarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
