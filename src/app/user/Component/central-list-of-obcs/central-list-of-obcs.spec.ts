import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralListOfOBCs } from './central-list-of-obcs';

describe('CentralListOfOBCs', () => {
  let component: CentralListOfOBCs;
  let fixture: ComponentFixture<CentralListOfOBCs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralListOfOBCs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralListOfOBCs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
