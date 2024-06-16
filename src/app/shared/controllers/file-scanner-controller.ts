import { inject, Injectable } from '@angular/core';
import { HttpService } from '../../utils/http.service';
import { Observable } from 'rxjs';
import { FileScanResultResponse, ScanResult } from '../../pages/main/main.types';

@Injectable({providedIn: 'root'})
export class FileScannerController {
  private http = inject(HttpService);

  /**
   @return scan result id
   **/
  uploadFile(fileBase64: string): Observable<string> {
    return this.http.post('./scan-file', {content: fileBase64});
  }

  loadScanResult(scanResultId: string): Observable<FileScanResultResponse> {
    return this.http.get<FileScanResultResponse>(`./file-scan-result/${scanResultId}`, {});
  }

  downloadReport(type: 'docx' | 'pdf'): Promise<any> {
    return this.http.downloadResource('./' + type);
  }
}
