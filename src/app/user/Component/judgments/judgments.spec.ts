import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Judgments } from './judgments';

describe('Judgments', () => {
  let component: Judgments;
  let fixture: ComponentFixture<Judgments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Judgments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Judgments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
