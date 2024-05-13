import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FileScanResult } from '../pages/main/file-info/file-info.component';
import { UrlScanResult } from '../pages/main/url-info/url-info.component';


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.endsWith('login') || req.url.endsWith('register')) {
      return of(new HttpResponse({body: (Math.random() * 1000) + ''}));
    }

    if (req.url.endsWith('scan-file')) {
      return of(new HttpResponse({body: this.fakeFileScan}));
    }

    if (req.url.endsWith('scan-url')) {
      return of(new HttpResponse({body: this.fakeUrlScan}));
    }

    return undefined;
  }

  fakeFileScan: FileScanResult[] = [
    {virusName: 'Mydoom', present: coinFlip()},
    {virusName: 'Sobig', present: coinFlip()},
    {virusName: 'Klez', present: coinFlip()},
    {virusName: 'WannaCry', present: coinFlip()},
    {virusName: 'Zeus', present: coinFlip()},
    {virusName: 'Slammer', present: coinFlip()},
    {virusName: 'CryptoLocker', present: coinFlip()},
    {virusName: 'Sasser', present: coinFlip()}
  ];

  fakeUrlScan: UrlScanResult = {
    vulnerabilitiesCount: 10,
    trapCount: 0,
    codeQualityScore: 89,
    fileScanResults: this.fakeFileScan,
    reportId: '6rvBcdg0CQb',
    processNode:
      {
        label: 'Dolorconsectetur',
        children: [
          {
            label: 'Adinceptos',
            children: [
              {
                label: 'Etiamcurae',
                children: []
              },
              {
                label: 'Magnavestibulum',
                children: []
              },
            ]
          },
          {
            label: 'Idviverra',
            children: [
              {
                label: 'Egestasjusto',
                children: []
              },
              {
                label: 'Quisqueadipiscing',
                children: []
              },
            ]
          }
        ]
      }
  };


}

function coinFlip(): boolean {
  return Math.floor(Math.random() * 2) == 0;
}
