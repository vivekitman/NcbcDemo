import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreamyLayer } from './creamy-layer';

describe('CreamyLayer', () => {
  let component: CreamyLayer;
  let fixture: ComponentFixture<CreamyLayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreamyLayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreamyLayer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
