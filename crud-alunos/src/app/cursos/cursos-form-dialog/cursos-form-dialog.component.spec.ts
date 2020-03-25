import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosFormDialogComponent } from './cursos-form-dialog.component';

describe('CursosFormDialogComponent', () => {
  let component: CursosFormDialogComponent;
  let fixture: ComponentFixture<CursosFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
