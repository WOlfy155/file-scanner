import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { take, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ScannerController } from '../../../../shared/controllers/scanner-controller';
import { SCAN_RESULT_PAGE } from '../../main-routing.module';

@Component({
  selector: 'app-url-scanner',
  templateUrl: './url-scanner.component.html',
  styleUrls: ['./url-scanner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UrlScannerComponent {
  private router = inject(Router);
  private controller = inject(ScannerController);

  url = '';

  scanUrl() {
    this.controller.scanUrl(this.url).pipe(
      tap((id) => this.router.navigate([SCAN_RESULT_PAGE(id)])),
      take(1)
    ).subscribe();
  }
}
