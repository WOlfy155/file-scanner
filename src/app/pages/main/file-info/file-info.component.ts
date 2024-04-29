import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export type FileScanResult = {
  virusName: string;
  present: boolean;
}

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.scss']
})
export class FileInfoComponent {
  scanData: FileScanResult[] = inject(MAT_DIALOG_DATA);
}
