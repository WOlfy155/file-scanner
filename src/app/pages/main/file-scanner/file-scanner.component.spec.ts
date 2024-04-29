import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileScannerComponent } from './file-scanner.component';

describe('FileScannerComponent', () => {
  let component: FileScannerComponent;
  let fixture: ComponentFixture<FileScannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileScannerComponent]
    });
    fixture = TestBed.createComponent(FileScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
