import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeculateWaterComponent } from './speculate-water.component';

describe('SpeculateWaterComponent', () => {
  let component: SpeculateWaterComponent;
  let fixture: ComponentFixture<SpeculateWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeculateWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeculateWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
