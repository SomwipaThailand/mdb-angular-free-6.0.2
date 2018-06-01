import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWaterRainComponent } from './manage-water-rain.component';

describe('ManageWaterRainComponent', () => {
  let component: ManageWaterRainComponent;
  let fixture: ComponentFixture<ManageWaterRainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageWaterRainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWaterRainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
