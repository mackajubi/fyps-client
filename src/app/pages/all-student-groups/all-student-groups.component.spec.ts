import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentGroupsComponent } from './all-student-groups.component';

describe('AllStudentGroupsComponent', () => {
  let component: AllStudentGroupsComponent;
  let fixture: ComponentFixture<AllStudentGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStudentGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStudentGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
