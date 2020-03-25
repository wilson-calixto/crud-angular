import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosNovoFormDialogComponent } from './alunos-novo-form-dialog.component';

describe('AlunosNovoFormDialogComponent', () => {
  let component: AlunosNovoFormDialogComponent;
  let fixture: ComponentFixture<AlunosNovoFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunosNovoFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosNovoFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
