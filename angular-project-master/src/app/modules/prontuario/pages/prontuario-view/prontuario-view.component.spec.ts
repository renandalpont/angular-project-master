import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioViewComponent } from './prontuario-view.component';

describe('ProntuarioViewComponent', () => {
  let component: ProntuarioViewComponent;
  let fixture: ComponentFixture<ProntuarioViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProntuarioViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProntuarioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
