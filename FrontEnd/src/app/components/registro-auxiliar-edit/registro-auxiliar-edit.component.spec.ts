import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAuxiliarEditComponent } from './registro-auxiliar-edit.component';

describe('RegistroAuxiliarEditComponent', () => {
  let component: RegistroAuxiliarEditComponent;
  let fixture: ComponentFixture<RegistroAuxiliarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAuxiliarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAuxiliarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
