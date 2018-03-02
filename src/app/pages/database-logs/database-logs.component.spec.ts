import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseLogsComponent } from './database-logs.component';

describe('DatabaseLogsComponent', () => {
  let component: DatabaseLogsComponent;
  let fixture: ComponentFixture<DatabaseLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
