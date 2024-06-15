import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirusTableComponent } from './virus-table.component';

describe('VirusTableComponent', () => {
  let component: VirusTableComponent;
  let fixture: ComponentFixture<VirusTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirusTableComponent]
    });
    fixture = TestBed.createComponent(VirusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
