import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWaterDryComponent } from './manage-water-dry.component';

describe('ManageWaterDryComponent', () => {
  let component: ManageWaterDryComponent;
  let fixture: ComponentFixture<ManageWaterDryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageWaterDryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWaterDryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
