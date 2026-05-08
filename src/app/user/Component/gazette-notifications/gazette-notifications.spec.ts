import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GazetteNotifications } from './gazette-notifications';

describe('GazetteNotifications', () => {
  let component: GazetteNotifications;
  let fixture: ComponentFixture<GazetteNotifications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GazetteNotifications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GazetteNotifications);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
