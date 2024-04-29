import { Component, Input } from '@angular/core';
import { FileScanResult } from '../file-info/file-info.component';

@Component({
  selector: 'app-virus-table',
  templateUrl: './virus-table.component.html',
  styleUrls: ['./virus-table.component.scss']
})
export class VirusTableComponent {
  @Input() scanData: FileScanResult[] = [];
  columns: string[] = ['virusName', 'present'];
}
