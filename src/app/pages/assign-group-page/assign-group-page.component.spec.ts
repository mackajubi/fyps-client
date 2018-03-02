import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignGroupPageComponent } from './assign-group-page.component';

describe('AssignGroupPageComponent', () => {
  let component: AssignGroupPageComponent;
  let fixture: ComponentFixture<AssignGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
