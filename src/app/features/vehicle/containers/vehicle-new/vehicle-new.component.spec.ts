import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleNewComponent } from './vehicle-new.component';

describe('VehicleNewComponent', () => {
  let component: VehicleNewComponent;
  let fixture: ComponentFixture<VehicleNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
