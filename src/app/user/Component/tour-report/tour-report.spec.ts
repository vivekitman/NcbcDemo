import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourReport } from './tour-report';

describe('TourReport', () => {
  let component: TourReport;
  let fixture: ComponentFixture<TourReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
