import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlScanResultComponent } from './url-scan-result.component';

describe('UrlScanComponent', () => {
  let component: UrlScanResultComponent;
  let fixture: ComponentFixture<UrlScanResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlScanResultComponent]
    });
    fixture = TestBed.createComponent(UrlScanResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
