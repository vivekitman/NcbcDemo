import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionReports } from './commission-reports';

describe('CommissionReports', () => {
  let component: CommissionReports;
  let fixture: ComponentFixture<CommissionReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommissionReports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommissionReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
