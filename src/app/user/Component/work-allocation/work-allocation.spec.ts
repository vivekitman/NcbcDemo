import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAllocation } from './work-allocation';

describe('WorkAllocation', () => {
  let component: WorkAllocation;
  let fixture: ComponentFixture<WorkAllocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkAllocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkAllocation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
