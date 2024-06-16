import { ChangeDetectionStrategy, Component, ElementRef, inject, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { defer, map, Observable, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UrlScannerController } from '../../../shared/controllers/url-scanner-controller';
import { UrlScanResultResponse } from '../main.types';

@Component({
  selector: 'app-url-scan-result',
  templateUrl: './url-scan-result.component.html',
  styleUrls: ['./url-scan-result.component.scss'],
  host: {
    class: 'page'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UrlScanResultComponent {
  private route = inject(ActivatedRoute);
  private controller = inject(UrlScannerController);

  urlScanResult$: Observable<UrlScanResultResponse> = defer(() => this.controller.loadScanResult(this.route.snapshot.params?.['id']));
  stats$: Observable<string[]> = defer(() => this.urlScanResult$?.pipe(map(r => Object.keys(r?.data?.attributes?.stats || {}))));
  chart$: Observable<any> = defer(() => this.controller?.loadChartData()).pipe(tap(d => this.chartData = d));

  private chartData: Record<string, number[]> = {};

  constructor() {
    Chart.defaults.color = '#ffffff';
  }

  @ViewChild('chart') set chart(value: ElementRef<HTMLCanvasElement>) {
    if (!value) {
      return;
    }

    const ctx = value.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: Object.keys(this.chartData)?.map(key => ({
          label: key,
          data: this.chartData[key],
          fill: true,
          borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          tension: 0.1
        })),
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
        animations: {
          borderWidth: {
            duration: 1000,
            easing: 'linear',
            from: 0,
            to: 1,
            loop: true
          }
        }
      }
    });
  }

  downloadReport(type: 'docx' | 'pdf') {
    return this.controller.downloadReport(type);
  }
}
