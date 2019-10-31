import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesCrearNotaComponent } from './actividades-crear-nota.component';

describe('ActividadesCrearNotaComponent', () => {
  let component: ActividadesCrearNotaComponent;
  let fixture: ComponentFixture<ActividadesCrearNotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesCrearNotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesCrearNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
