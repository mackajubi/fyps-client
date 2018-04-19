import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SddPageComponent } from './sdd-page.component';

describe('SddPageComponent', () => {
  let component: SddPageComponent;
  let fixture: ComponentFixture<SddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
