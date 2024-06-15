import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import Chart from 'chart.js/auto';
import { defer, Observable, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ScannerController } from '../../../shared/controllers/scanner-controller';
import { VirusScanResult } from '../components/virus-table/virus-table.component';

export type ProcessNode = {
  label: string,
  children: ProcessNode[]
}

export type ScanResult = {
  vulnerabilitiesCount: number,
  trapCount: number,
  codeQualityScore: number,
  fileScanResults: VirusScanResult[],
  reportId: string
  processNode: ProcessNode
}

@Component({
  selector: 'app-scan-result',
  templateUrl: './scan-result.component.html',
  styleUrls: ['./scan-result.component.scss'],
  host: {
    class: 'page'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScanResultComponent {
  private route = inject(ActivatedRoute);
  private controller = inject(ScannerController);
  private cdr = inject(ChangeDetectorRef);

  urlScanResult$: Observable<ScanResult> = defer(() => this.controller.loadScanResult(this.route.snapshot.params?.['id']));

  private scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        this.cdr?.markForCheck();
        return;
      }
    });
  });

  @ViewChildren('scrollBlock', {read: ElementRef}) set scrollBlocks(blocks: QueryList<ElementRef<HTMLElement>>) {
    blocks.forEach(block => this.scrollObserver.observe(block.nativeElement));
  }

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
