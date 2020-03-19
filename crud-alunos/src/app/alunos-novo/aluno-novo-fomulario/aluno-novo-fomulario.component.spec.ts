import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoNovoFomularioComponent } from './aluno-novo-fomulario.component';

describe('AlunoNovoFomularioComponent', () => {
  let component: AlunoNovoFomularioComponent;
  let fixture: ComponentFixture<AlunoNovoFomularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoNovoFomularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoNovoFomularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
