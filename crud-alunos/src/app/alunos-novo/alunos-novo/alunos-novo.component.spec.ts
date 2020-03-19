import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosNovoComponent } from './alunos-novo.component';

describe('AlunosNovoComponent', () => {
  let component: AlunosNovoComponent;
  let fixture: ComponentFixture<AlunosNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunosNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
