import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorReportsPageComponent } from './coordinator-reports-page.component';

describe('CoordinatorReportsPageComponent', () => {
  let component: CoordinatorReportsPageComponent;
  let fixture: ComponentFixture<CoordinatorReportsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorReportsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
