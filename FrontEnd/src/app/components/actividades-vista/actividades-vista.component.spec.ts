import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesVistaComponent } from './actividades-vista.component';

describe('ActividadesVistaComponent', () => {
  let component: ActividadesVistaComponent;
  let fixture: ComponentFixture<ActividadesVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
