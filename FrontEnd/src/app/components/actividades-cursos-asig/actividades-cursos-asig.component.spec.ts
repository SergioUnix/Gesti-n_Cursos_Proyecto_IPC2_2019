import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesCursosAsigComponent } from './actividades-cursos-asig.component';

describe('ActividadesCursosAsigComponent', () => {
  let component: ActividadesCursosAsigComponent;
  let fixture: ComponentFixture<ActividadesCursosAsigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesCursosAsigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesCursosAsigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
