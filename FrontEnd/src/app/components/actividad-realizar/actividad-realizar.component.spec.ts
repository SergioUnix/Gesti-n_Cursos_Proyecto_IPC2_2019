import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadRealizarComponent } from './actividad-realizar.component';

describe('ActividadRealizarComponent', () => {
  let component: ActividadRealizarComponent;
  let fixture: ComponentFixture<ActividadRealizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadRealizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadRealizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
