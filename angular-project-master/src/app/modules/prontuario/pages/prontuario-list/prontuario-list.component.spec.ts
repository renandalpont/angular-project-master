import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioListComponent } from './prontuario-list.component';

describe('ProntuarioListComponent', () => {
  let component: ProntuarioListComponent;
  let fixture: ComponentFixture<ProntuarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProntuarioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProntuarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
