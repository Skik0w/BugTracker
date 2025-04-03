import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugReportDetailsComponent } from './bug-report-details.component';

describe('BugReportDetailsComponent', () => {
  let component: BugReportDetailsComponent;
  let fixture: ComponentFixture<BugReportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BugReportDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BugReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
