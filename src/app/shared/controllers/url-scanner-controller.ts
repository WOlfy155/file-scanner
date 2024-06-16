import { inject, Injectable } from '@angular/core';
import { HttpService } from '../../utils/http.service';
import { Observable, of } from 'rxjs';
import { UrlScanResultResponse } from '../../pages/main/main.types';

@Injectable({providedIn: 'root'})
export class UrlScannerController {
  private http = inject(HttpService);

  /**
   * @return scan result id
   */
  scanUrl(url: string): Observable<string> {

    const urlSearchMetricsMap: Record<string, number[]> = JSON.parse(localStorage.getItem('url-search-metrics'));
    if (urlSearchMetricsMap?.[url]) {
      urlSearchMetricsMap[url][5] = urlSearchMetricsMap?.[url]?.[5] + 1;
    } else {
      urlSearchMetricsMap[url] = [0, 0, 0, 0, 0, 1];
    }

    localStorage.setItem('url-search-metrics', JSON.stringify(urlSearchMetricsMap));

    return this.http.post<string>('./scan-url', {});
    // return this.http.get(url, {}).pipe(
    //   switchMap((resp) => this.http.post<UrlScanResult[]>('./scan-url', resp)),
    // );
  }

  loadScanResult(scanResultId: string): Observable<UrlScanResultResponse> {
    return this.http.get<UrlScanResultResponse>(`./url-scan-result/${scanResultId}`, {});
  }

  loadChartData(): Observable<Record<string, number[]>> {
    return of(JSON.parse(localStorage.getItem('url-search-metrics')));
  }

  downloadReport(type: 'docx' | 'pdf'): Promise<any> {
    return this.http.downloadResource('./' + type);
  }
}
