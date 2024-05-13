import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Chart from 'chart.js/auto';
import { FileScanResult } from '../file-info/file-info.component';
import { UrlScannerController } from '../../../shared/controllers/url-scanner-controller';

export type ProcessNode = {
  label: string,
  children: ProcessNode[]
}

export type UrlScanResult = {
  vulnerabilitiesCount: number,
  trapCount: number,
  codeQualityScore: number,
  fileScanResults: FileScanResult[],
  reportId: string
  processNode: ProcessNode
}

@Component({
  selector: 'app-url-info',
  templateUrl: './url-info.component.html',
  styleUrls: ['./url-info.component.scss']
})
export class UrlInfoComponent {
  public result: UrlScanResult = inject(MAT_DIALOG_DATA);
  private controller = inject(UrlScannerController);

  @ViewChild('chart') set chart(value: ElementRef<HTMLCanvasElement>) {
    const ctx = value.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Some dataset',
          data: [47, 88, 10, 11, 10, 21, 72],
          fill: true,
          borderColor: 'rgb(19,83,173)',
          tension: 0.1
        },
          {
            label: 'Other dataset',
            data: [63, 91, 98, 15, 40, 63, 71],
            fill: true,
            borderColor: 'rgb(176,112,17)',
            tension: 0.1
          }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  downloadReport(type: 'docx' | 'pdf') {
    return this.controller.downloadReport(type);
  }
}
