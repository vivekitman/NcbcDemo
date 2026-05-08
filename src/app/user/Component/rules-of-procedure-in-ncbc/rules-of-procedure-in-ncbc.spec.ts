import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesOfProcedureInNCBC } from './rules-of-procedure-in-ncbc';

describe('RulesOfProcedureInNCBC', () => {
  let component: RulesOfProcedureInNCBC;
  let fixture: ComponentFixture<RulesOfProcedureInNCBC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesOfProcedureInNCBC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesOfProcedureInNCBC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
