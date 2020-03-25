import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormDialogComponent } from './base-form-dialog.component';

describe('BaseFormDialogComponent', () => {
  let component: BaseFormDialogComponent;
  let fixture: ComponentFixture<BaseFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
