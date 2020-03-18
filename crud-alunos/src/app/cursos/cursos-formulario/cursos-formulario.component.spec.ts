import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosFormularioComponent } from './cursos-formulario.component';

describe('CursosFormularioComponent', () => {
  let component: CursosFormularioComponent;
  let fixture: ComponentFixture<CursosFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
