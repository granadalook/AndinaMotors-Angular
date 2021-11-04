import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresionllantasComponent } from './presionllantas.component';

describe('PresionllantasComponent', () => {
  let component: PresionllantasComponent;
  let fixture: ComponentFixture<PresionllantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresionllantasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresionllantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
