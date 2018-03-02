import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsToolsPageComponent } from './requirements-tools-page.component';

describe('RequirementsToolsPageComponent', () => {
  let component: RequirementsToolsPageComponent;
  let fixture: ComponentFixture<RequirementsToolsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementsToolsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsToolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
