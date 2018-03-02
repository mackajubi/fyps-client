import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptPapersPageComponent } from './concept-papers-page.component';

describe('ConceptPapersPageComponent', () => {
  let component: ConceptPapersPageComponent;
  let fixture: ComponentFixture<ConceptPapersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptPapersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptPapersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
