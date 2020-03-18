import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTableComponent } from './checkbox-table.component';

describe('CheckboxTableComponent', () => {
  let component: CheckboxTableComponent;
  let fixture: ComponentFixture<CheckboxTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
