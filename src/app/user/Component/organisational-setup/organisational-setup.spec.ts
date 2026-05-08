import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationalSetup } from './organisational-setup';

describe('OrganisationalSetup', () => {
  let component: OrganisationalSetup;
  let fixture: ComponentFixture<OrganisationalSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganisationalSetup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationalSetup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
