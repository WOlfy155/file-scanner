import { inject, Injectable } from '@angular/core';
import { HttpService } from '../../utils/http.service';
import { Observable } from 'rxjs';
import { ScanResult } from '../../pages/main/scan-result/scan-result.component';

@Injectable({providedIn: 'root'})
export class ScannerController {
  private http = inject(HttpService);

  /**
   @return scan result id
   **/
  uploadFile(fileBase64: string): Observable<string> {
    return this.http.post('./scan-file', {content: fileBase64});
  }

  /**
   * @return scan result id
   */
  scanUrl(url: string): Observable<string> {

    return this.http.post<string>('./scan-url', {});
    // return this.http.get(url, {}).pipe(
    //   switchMap((resp) => this.http.post<UrlScanResult[]>('./scan-url', resp)),
    // );
  }

  loadScanResult(scanResultId: string): Observable<ScanResult> {
    return this.http.get<ScanResult>(`./scan-result/${scanResultId}`, {});
  }

  downloadReport(type: 'docx' | 'pdf'): Promise<any> {
    return this.http.downloadResource('./' + type);
  }
}
