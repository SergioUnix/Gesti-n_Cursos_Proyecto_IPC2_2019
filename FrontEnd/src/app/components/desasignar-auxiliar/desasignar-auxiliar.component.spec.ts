import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesasignarAuxiliarComponent } from './desasignar-auxiliar.component';

describe('DesasignarAuxiliarComponent', () => {
  let component: DesasignarAuxiliarComponent;
  let fixture: ComponentFixture<DesasignarAuxiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesasignarAuxiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesasignarAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
