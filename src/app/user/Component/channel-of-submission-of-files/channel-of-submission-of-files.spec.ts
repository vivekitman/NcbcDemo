import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelOfSubmissionOfFiles } from './channel-of-submission-of-files';

describe('ChannelOfSubmissionOfFiles', () => {
  let component: ChannelOfSubmissionOfFiles;
  let fixture: ComponentFixture<ChannelOfSubmissionOfFiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelOfSubmissionOfFiles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelOfSubmissionOfFiles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
