import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesOfTheFullCommissionMeeting } from './minutes-of-the-full-commission-meeting';

describe('MinutesOfTheFullCommissionMeeting', () => {
  let component: MinutesOfTheFullCommissionMeeting;
  let fixture: ComponentFixture<MinutesOfTheFullCommissionMeeting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinutesOfTheFullCommissionMeeting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinutesOfTheFullCommissionMeeting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
