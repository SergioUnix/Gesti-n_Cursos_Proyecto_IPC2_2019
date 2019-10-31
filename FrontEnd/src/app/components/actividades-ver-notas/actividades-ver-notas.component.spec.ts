import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesVerNotasComponent } from './actividades-ver-notas.component';

describe('ActividadesVerNotasComponent', () => {
  let component: ActividadesVerNotasComponent;
  let fixture: ComponentFixture<ActividadesVerNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesVerNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesVerNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
