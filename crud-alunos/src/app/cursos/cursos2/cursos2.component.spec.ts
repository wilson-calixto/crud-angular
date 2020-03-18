import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursos2Component } from './cursos2.component';

describe('Cursos2Component', () => {
  let component: Cursos2Component;
  let fixture: ComponentFixture<Cursos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cursos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cursos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
