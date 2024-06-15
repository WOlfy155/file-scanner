import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanResultComponent } from './scan-result.component';

describe('UrlScanComponent', () => {
  let component: ScanResultComponent;
  let fixture: ComponentFixture<ScanResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScanResultComponent]
    });
    fixture = TestBed.createComponent(ScanResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
