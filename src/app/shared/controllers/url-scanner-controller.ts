import { inject, Injectable } from '@angular/core';
import { HttpService } from '../../utils/http.service';
import { Observable } from 'rxjs';
import { UrlScanResult } from '../../pages/main/url-info/url-info.component';

@Injectable({providedIn: 'root'})
export class UrlScannerController {
  private http = inject(HttpService);

  scanUrl(url: string): Observable<UrlScanResult> {

    return this.http.post<UrlScanResult>('./scan-url', {});

    // return this.http.get(url, {}).pipe(
    //   switchMap((resp) => this.http.post<UrlScanResult[]>('./scan-url', resp)),
    // );
  }

  downloadReport(type: 'docx' | 'pdf'): Promise<any> {
    return this.http.downloadResource('./' + type);
  }
}
