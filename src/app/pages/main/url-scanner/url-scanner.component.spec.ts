import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlScannerComponent } from './url-scanner.component';

describe('UrlScannerComponent', () => {
  let component: UrlScannerComponent;
  let fixture: ComponentFixture<UrlScannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlScannerComponent]
    });
    fixture = TestBed.createComponent(UrlScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
