import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAutosComponent } from './all-autos.component';

describe('AllAutosComponent', () => {
  let component: AllAutosComponent;
  let fixture: ComponentFixture<AllAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
