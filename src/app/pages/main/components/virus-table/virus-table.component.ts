import { Component, Input } from '@angular/core';
import { FileScanResultData } from '../../main.types';

@Component({
  selector: 'app-virus-table',
  templateUrl: './virus-table.component.html',
  styleUrl: './virus-table.component.scss'
})
export class VirusTableComponent {
  @Input() scanData: Record<string, FileScanResultData> = {};
  protected readonly Object = Object;
}
