import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinadorCreateComponent } from './treinador-create.component';

describe('TreinadorCreateComponent', () => {
  let component: TreinadorCreateComponent;
  let fixture: ComponentFixture<TreinadorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinadorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
