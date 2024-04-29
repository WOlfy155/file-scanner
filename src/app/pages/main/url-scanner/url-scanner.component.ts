import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UrlScannerController } from '../../../shared/controllers/url-scanner-controller';
import { take, tap } from 'rxjs';
import { UrlInfoComponent } from '../url-info/url-info.component';

@Component({
  selector: 'app-url-scanner',
  templateUrl: './url-scanner.component.html',
  styleUrls: ['./url-scanner.component.scss']
})
export class UrlScannerComponent {

  private dialog = inject(MatDialog);
  private controller = inject(UrlScannerController);

  url = '';

  scanUrl() {
    this.controller.scanUrl(this.url).pipe(
      tap((results) => this.dialog.open(UrlInfoComponent, {width: '80vw', data: results})),
      take(1)
    ).subscribe();
  }
}
