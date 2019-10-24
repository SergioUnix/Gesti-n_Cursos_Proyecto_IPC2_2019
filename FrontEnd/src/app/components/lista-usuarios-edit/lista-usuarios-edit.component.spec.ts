import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuariosEditComponent } from './lista-usuarios-edit.component';

describe('ListaUsuariosEditComponent', () => {
  let component: ListaUsuariosEditComponent;
  let fixture: ComponentFixture<ListaUsuariosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUsuariosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsuariosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
