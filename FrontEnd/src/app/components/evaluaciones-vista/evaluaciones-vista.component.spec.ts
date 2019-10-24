import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionesVistaComponent } from './evaluaciones-vista.component';

describe('EvaluacionesVistaComponent', () => {
  let component: EvaluacionesVistaComponent;
  let fixture: ComponentFixture<EvaluacionesVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionesVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionesVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
