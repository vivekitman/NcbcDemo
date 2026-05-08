import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advices } from './advices';

describe('Advices', () => {
  let component: Advices;
  let fixture: ComponentFixture<Advices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Advices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Advices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
