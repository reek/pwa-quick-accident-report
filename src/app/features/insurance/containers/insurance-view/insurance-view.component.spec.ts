import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceViewComponent } from './insurance-view.component';

describe('InsuranceViewComponent', () => {
  let component: InsuranceViewComponent;
  let fixture: ComponentFixture<InsuranceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
