import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { SubSink } from '../../../../utils/rx-js-utils';
import { fromEvent, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { FILE_SCAN_RESULT_PAGE } from '../../main-routing.module';
import { FileScannerController } from '../../../../shared/controllers/file-scanner-controller';

@Component({
  selector: 'app-file-scanner',
  templateUrl: './file-scanner.component.html',
  styleUrls: ['./file-scanner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileScannerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;

  private router = inject(Router);
  private fileScannerController = inject(FileScannerController);

  private subs = new SubSink();

  ngAfterViewInit(): void {
    this.subs.sink = fromEvent(this.fileInput.nativeElement, 'change').pipe(
      switchMap((ev: any) => this.toBase64(ev.target.files[0])),
      switchMap((base64: string) => this.fileScannerController.uploadFile(base64)),
      tap((id) => this.goToFileInfo(id)),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private goToFileInfo(id: string) {
    this.router.navigate([FILE_SCAN_RESULT_PAGE(id)]);
  }

  private toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
}
