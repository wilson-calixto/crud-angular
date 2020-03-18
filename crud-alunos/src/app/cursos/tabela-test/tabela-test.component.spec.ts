import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaTestComponent } from './tabela-test.component';

describe('TabelaTestComponent', () => {
  let component: TabelaTestComponent;
  let fixture: ComponentFixture<TabelaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
