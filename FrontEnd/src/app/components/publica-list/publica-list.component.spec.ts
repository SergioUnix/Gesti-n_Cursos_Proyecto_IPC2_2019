import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicaListComponent } from './publica-list.component';

describe('PublicaListComponent', () => {
  let component: PublicaListComponent;
  let fixture: ComponentFixture<PublicaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
