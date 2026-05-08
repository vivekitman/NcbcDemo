import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NCBCAct } from './ncbc-act';

describe('NCBCAct', () => {
  let component: NCBCAct;
  let fixture: ComponentFixture<NCBCAct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NCBCAct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NCBCAct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
