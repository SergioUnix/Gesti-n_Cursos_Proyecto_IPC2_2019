import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarCursosAsigComponent } from './auxiliar-cursos-asig.component';

describe('AuxiliarCursosAsigComponent', () => {
  let component: AuxiliarCursosAsigComponent;
  let fixture: ComponentFixture<AuxiliarCursosAsigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxiliarCursosAsigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliarCursosAsigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
