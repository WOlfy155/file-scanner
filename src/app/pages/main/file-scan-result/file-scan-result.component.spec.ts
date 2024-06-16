import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileScanResultComponent } from './file-scan-result.component';

describe('UrlScanComponent', () => {
  let component: FileScanResultComponent;
  let fixture: ComponentFixture<FileScanResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileScanResultComponent]
    });
    fixture = TestBed.createComponent(FileScanResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
