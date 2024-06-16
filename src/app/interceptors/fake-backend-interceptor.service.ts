import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { VirusScanResult } from '../pages/main/components/vulnerabilities-table/vulnerabilities-table.component';
import { FileScanResultResponse, ScanResult, UrlScanResultResponse } from '../pages/main/main.types';


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.endsWith('login') || req.url.endsWith('register')) {
      return of(new HttpResponse({body: (Math.random() * 1000) + ''}));
    }

    if (req.url.endsWith('scan-file')) {
      return of(new HttpResponse({body: (Math.random() * 1000000).toFixed()}));
    }

    if (req.url.endsWith('scan-url')) {
      return of(new HttpResponse({body: (Math.random() * 1000000).toFixed()}));
    }

    if (req.url.includes('file-scan-result')) {
      return of(new HttpResponse({body: this.fakeFileScanResult}));
    }

    if (req.url.includes('url-scan-result')) {
      return of(new HttpResponse({body: this.fakeUrlScanResult}));
    }

    return undefined;
  }

  fakeFileScanResult: FileScanResultResponse = JSON.parse('{ \n' +
    '    "data": { \n' +
    '        "attributes": { \n' +
    '            "date": 1591701363, \n' +
    '            "results": { \n' +
    '                "ALYac": { \n' +
    '                    "category": "malicious", \n' +
    '                    "engine_name": "ALYac", \n' +
    '                    "engine_update": "20200609", \n' +
    '                    "engine_version": "1.1.1.5", \n' +
    '                    "method": "blacklist", \n' +
    '                    "result": "Dialer.Webdialer.F" \n' +
    '                }, \n' +
    '                "Avast": { \n' +
    '                    "category": "malicious", \n' +
    '                    "engine_name": "Avast", \n' +
    '                    "engine_update": "20200609", \n' +
    '                    "engine_version": "18.4.3895.0", \n' +
    '                    "method": "blacklist", \n' +
    '                    "result": "Win32:Dh-A [Heur]" \n' +
    '                }, \n' +
    '                "Avast-Mobile": { \n' +
    '                    "category": "undetected", \n' +
    '                    "engine_name": "Avast-Mobile", \n' +
    '                    "engine_update": "20200609", \n' +
    '                    "engine_version": "200609-00", \n' +
    '                    "method": "blacklist", \n' +
    '                    "result": null \n' +
    '                }, \n' +
    '                "CAT-QuickHeal": { \n' +
    '                    "category": "malicious", \n' +
    '                    "engine_name": "CAT-QuickHeal", \n' +
    '                    "engine_update": "20200609", \n' +
    '                    "engine_version": "14.00", \n' +
    '                    "method": "blacklist", \n' +
    '                    "result": "Trojan.Webdial" \n' +
    '                }, \n' +
    '                "ClamAV": { \n' +
    '                    "category": "malicious", \n' +
    '                    "engine_name": "ClamAV", \n' +
    '                    "engine_update": "20200608", \n' +
    '                    "engine_version": "0.102.3.0", \n' +
    '                    "method": "blacklist", \n' +
    '                    "result": "Win.Trojan.Dialer-83" \n' +
    '                }, \n' +
    '                "Comodo": { \n' +
    '                    "category": "malicious", \n' +
    '                    "engine_name": "Comodo", \n' +
    '                    "engine_update": "20200608", \n' +
    '                    "engine_version": "32518", \n' +
    '                    "method": "blacklist", \n' +
    '                    "result": "Malware@#1o6vtbly4swmm" \n' +
    '                } \n' +
    '            }, \n' +
    '            "stats": { \n' +
    '                "confirmed-timeout": 0, \n' +
    '                "failure": 0, \n' +
    '                "harmless": 0, \n' +
    '                "malicious": 5, \n' +
    '                "suspicious": 0, \n' +
    '                "timeout": 0, \n' +
    '                "type-unsupported": 0, \n' +
    '                "undetected": 1 \n' +
    '            }, \n' +
    '            "status": "in-progress" \n' +
    '        }, \n' +
    '        "id": "8zc5dTFiYmMxOTEpNzMzZWZmODE1ND7mYjU1ZjY5Npk6MTU5MlcwMTM2Mw==", \n' +
    '        "type": "analysis" \n' +
    '    } \n' +
    '}');

  fakeUrlScanResult: UrlScanResultResponse = JSON.parse('{ \n' +
    '    "data": { \n' +
    '        "attributes": { \n' +
    '            "date": 1591701032, \n' +
    '            "results": { \n' +
    '                "ADMINUSLabs": { \n' +
    '                    "category": "harmless", \n' +
    '                    "engine_name": "ADMINUSLabs", \n' +
    '                    "method": "blacklist", \n' +
    '                    "result": "clean" \n' +
    '                }, \n' +
    '                "AegisLab WebGuard": { \n' +
    '                    "category": "harmless", \n' +
    '                    "engine_name": "AegisLab WebGuard", \n' +
    '                    "method": "blacklist", \n' +
    '                    "result": "clean" \n' +
    '                }, \n' +
    '                "AlienVault": { \n' +
    '                    "category": "harmless", \n' +
    '                    "engine_name": "AlienVault", \n' +
    '                    "method": "blacklist", \n' +
    '                    "result": "clean" \n' +
    '                }, \n' +
    '                "Antiy-AVL": { \n' +
    '                    "category": "harmless", \n' +
    '                    "engine_name": "Antiy-AVL", \n' +
    '                    "method": "blacklist", \n' +
    '                    "result": "clean" \n' +
    '                }, \n' +
    '                "Artists Against 419": { \n' +
    '                    "category": "harmless", \n' +
    '                    "engine_name": "Artists Against 419", \n' +
    '                    "method": "blacklist", \n' +
    '                    "result": "clean" \n' +
    '                }, \n' +
    '                "AutoShun": { \n' +
    '                    "category": "undetected", \n' +
    '                    "engine_name": "AutoShun", \n' +
    '                    "method": "blacklist", \n' +
    '                    "result": "unrated" \n' +
    '                }, \n' +
    '                "Avira": { \n' +
    '                    "category": "harmless", \n' +
    '                    "engine_name": "Avira", \n' +
    '                    "method": "blacklist", \n' +
    '                    "result": "clean" \n' +
    '                }, \n' +
    '                "BADWARE.INFO": { \n' +
    '                    "category": "harmless", \n' +
    '                    "engine_name": "BADWARE.INFO", \n' +
    '                    "method": "blacklist", \n' +
    '                    "result": "clean" \n' +
    '                } \n' +
    '            }, \n' +
    '            "stats": { \n' +
    '                "harmless": 7, \n' +
    '                "malicious": 0, \n' +
    '                "suspicious": 0, \n' +
    '                "timeout": 0, \n' +
    '                "undetected": 1 \n' +
    '            }, \n' +
    '            "status": "completed" \n' +
    '        }, \n' +
    '        "id": "u-9d11db1b0q1200ba75016e4c010bc93836366881d021a658ua7f85a8b65c3c1e-1591701032", \n' +
    '        "type": "analysis" \n' +
    '    } \n' +
    '}');

  fakeVirusScan: VirusScanResult[] = [
    {virusName: 'Mydoom', present: coinFlip()},
    {virusName: 'Sobig', present: coinFlip()},
    {virusName: 'Klez', present: coinFlip()},
    {virusName: 'WannaCry', present: coinFlip()},
    {virusName: 'Zeus', present: coinFlip()},
    {virusName: 'Slammer', present: coinFlip()},
    {virusName: 'CryptoLocker', present: coinFlip()},
    {virusName: 'Sasser', present: coinFlip()}
  ];

  fakeScan: ScanResult = {
    vulnerabilitiesCount: 10,
    trapCount: 0,
    codeQualityScore: 89,
    fileScanResults: this.fakeVirusScan,
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
