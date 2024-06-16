import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnerabilitiesTableComponent } from './vulnerabilities-table.component';

describe('VirusTableComponent', () => {
  let component: VulnerabilitiesTableComponent;
  let fixture: ComponentFixture<VulnerabilitiesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VulnerabilitiesTableComponent]
    });
    fixture = TestBed.createComponent(VulnerabilitiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
