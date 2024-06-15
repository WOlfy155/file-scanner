import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type VirusScanResult = {
  virusName: string;
  present: boolean;
}

@Component({
  selector: 'app-virus-table',
  templateUrl: './virus-table.component.html',
  styleUrls: ['./virus-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirusTableComponent {
  @Input() scanData: VirusScanResult[] = [];
  columns: string[] = ['virusName', 'present'];
}
