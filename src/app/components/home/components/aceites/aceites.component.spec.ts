import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceitesComponent } from './aceites.component';

describe('AceitesComponent', () => {
  let component: AceitesComponent;
  let fixture: ComponentFixture<AceitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
