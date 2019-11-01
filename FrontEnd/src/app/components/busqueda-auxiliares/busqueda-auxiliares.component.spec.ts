import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaAuxiliaresComponent } from './busqueda-auxiliares.component';

describe('BusquedaAuxiliaresComponent', () => {
  let component: BusquedaAuxiliaresComponent;
  let fixture: ComponentFixture<BusquedaAuxiliaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaAuxiliaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaAuxiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
