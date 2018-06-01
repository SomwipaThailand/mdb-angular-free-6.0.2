import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectRainComponent } from './protect-rain.component';

describe('ProtectRainComponent', () => {
  let component: ProtectRainComponent;
  let fixture: ComponentFixture<ProtectRainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectRainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectRainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
