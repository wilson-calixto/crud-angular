import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CursoDetalheComponent } from './detalhe.component';

describe('DetalheComponent', () => {
  let component:CursoDetalheComponent;
  let fixture: ComponentFixture<DetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CursoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
