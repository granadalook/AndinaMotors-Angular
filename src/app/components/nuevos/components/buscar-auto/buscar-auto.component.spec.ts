import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAutoComponent } from './buscar-auto.component';

describe('BuscarAutoComponent', () => {
  let component: BuscarAutoComponent;
  let fixture: ComponentFixture<BuscarAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
