import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaFvComponent } from './pregunta-fv.component';

describe('PreguntaFvComponent', () => {
  let component: PreguntaFvComponent;
  let fixture: ComponentFixture<PreguntaFvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaFvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaFvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
