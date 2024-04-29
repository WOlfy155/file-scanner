import {inject, Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';
import {Observable} from 'rxjs';
import {FileScanResult} from '../../pages/main/file-info/file-info.component';

@Injectable({providedIn: 'root'})
export class FileScannerController {
  private http = inject(HttpService);

  uploadFile(fileBase64: string): Observable<FileScanResult[]> {
    return this.http.post('./scan-file', {content: fileBase64});
  }
}
