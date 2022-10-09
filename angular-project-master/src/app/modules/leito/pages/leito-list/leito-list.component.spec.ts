import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitoListComponent } from './leito-list.component';

describe('LeitoListComponent', () => {
  let component: LeitoListComponent;
  let fixture: ComponentFixture<LeitoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
