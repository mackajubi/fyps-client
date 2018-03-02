import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrsPageComponent } from './srs-page.component';

describe('SrsPageComponent', () => {
  let component: SrsPageComponent;
  let fixture: ComponentFixture<SrsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
