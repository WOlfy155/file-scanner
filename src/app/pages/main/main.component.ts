import {Component} from '@angular/core';

export const allScannerTypes = ['File', 'Url'] as const;
export type ScannerType = (typeof allScannerTypes)[number]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  host: {class: 'page'}
})
export class MainComponent {
  scannerTypes = allScannerTypes;
  selectedScannerType: ScannerType = 'Url';
}
