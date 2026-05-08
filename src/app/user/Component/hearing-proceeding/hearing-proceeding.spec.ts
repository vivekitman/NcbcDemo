import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearingProceeding } from './hearing-proceeding';

describe('HearingProceeding', () => {
  let component: HearingProceeding;
  let fixture: ComponentFixture<HearingProceeding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HearingProceeding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HearingProceeding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
