import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionAuxiliarComponent } from './asignacion-auxiliar.component';

describe('AsignacionAuxiliarComponent', () => {
  let component: AsignacionAuxiliarComponent;
  let fixture: ComponentFixture<AsignacionAuxiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionAuxiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
