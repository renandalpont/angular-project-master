import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitoCreateComponent } from './leito-create.component';

describe('LeitoCreateComponent', () => {
  let component: LeitoCreateComponent;
  let fixture: ComponentFixture<LeitoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
