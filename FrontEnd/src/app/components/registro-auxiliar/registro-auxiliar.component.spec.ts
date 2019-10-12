import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAuxiliarComponent } from './registro-auxiliar.component';

describe('RegistroAuxiliarComponent', () => {
  let component: RegistroAuxiliarComponent;
  let fixture: ComponentFixture<RegistroAuxiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAuxiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
