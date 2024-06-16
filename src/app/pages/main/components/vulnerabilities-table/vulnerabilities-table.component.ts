import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FileScanResultData } from '../../main.types';

export type VirusScanResult = {
  virusName: string;
  present: boolean;
}

@Component({
  selector: 'app-vulnerabilities-table',
  templateUrl: './vulnerabilities-table.component.html',
  styleUrls: ['./vulnerabilities-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VulnerabilitiesTableComponent {
  @Input() scanData: Record<string, FileScanResultData> = {};
  protected readonly Object = Object;
}
