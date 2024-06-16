import { ChangeDetectionStrategy, Component } from '@angular/core';
import { allScannerTypes, ScannerType } from './main.types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  host: {class: 'page'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  scannerTypes = allScannerTypes;
  selectedScannerType: ScannerType = 'File';
}
