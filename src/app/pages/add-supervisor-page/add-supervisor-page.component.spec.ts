import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupervisorPageComponent } from './add-supervisor-page.component';

describe('AddSupervisorPageComponent', () => {
  let component: AddSupervisorPageComponent;
  let fixture: ComponentFixture<AddSupervisorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSupervisorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupervisorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
