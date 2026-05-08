import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandalCommissionReport } from './mandal-commission-report';

describe('MandalCommissionReport', () => {
  let component: MandalCommissionReport;
  let fixture: ComponentFixture<MandalCommissionReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MandalCommissionReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandalCommissionReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
