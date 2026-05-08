import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionoftheCommission } from './compositionofthe-commission';

describe('CompositionoftheCommission', () => {
  let component: CompositionoftheCommission;
  let fixture: ComponentFixture<CompositionoftheCommission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompositionoftheCommission]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompositionoftheCommission);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
