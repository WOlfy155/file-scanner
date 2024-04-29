import { AfterViewInit, Component, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileScannerController } from '../../../shared/controllers/file-scanner-controller';
import { SubSink } from '../../../utils/rx-js-utils';
import { fromEvent, switchMap, tap } from 'rxjs';
import { FileInfoComponent, FileScanResult } from '../file-info/file-info.component';

@Component({
  selector: 'app-file-scanner',
  templateUrl: './file-scanner.component.html',
  styleUrls: ['./file-scanner.component.scss']
})
export class FileScannerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;

  private dialog = inject(MatDialog);
  private fileScannerController = inject(FileScannerController);

  private subs = new SubSink();

  ngAfterViewInit(): void {
    this.subs.sink = fromEvent(this.fileInput.nativeElement, 'change').pipe(
      switchMap((ev: any) => this.toBase64(ev.target.files[0])),
      switchMap((base64: string) => this.fileScannerController.uploadFile(base64)),
      tap((scanResults) => this.openDialog(scanResults)),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  openDialog(scanResults: FileScanResult[]) {
    this.dialog.open(FileInfoComponent, {width: '80vw', data: scanResults});
  }

  private toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
}
