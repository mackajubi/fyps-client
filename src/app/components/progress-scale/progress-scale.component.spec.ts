import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressScaleComponent } from './progress-scale.component';

describe('ProgressScaleComponent', () => {
  let component: ProgressScaleComponent;
  let fixture: ComponentFixture<ProgressScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
