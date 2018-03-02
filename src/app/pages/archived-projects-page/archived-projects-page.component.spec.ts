import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedProjectsPageComponent } from './archived-projects-page.component';

describe('ArchivedProjectsPageComponent', () => {
  let component: ArchivedProjectsPageComponent;
  let fixture: ComponentFixture<ArchivedProjectsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedProjectsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
