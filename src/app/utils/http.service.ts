import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService {
  http = inject(HttpClient);

  public get<T>(url: string, params: { [param: string]: any }): Observable<T> {
    const headers = new HttpHeaders();

    return this.http.get<T>(url, {headers, params});
  }

  public post<T>(url: string, body: any, params?: { [param: string]: any }): Observable<T> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    return this.http.post<T>(url, body, {headers, params});
  }

  public async downloadResource(url: string, params?: { [param: string]: any }): Promise<HttpResponse<Blob>> {

    const response: HttpResponse<Blob> = await this.http.get(url, {
      observe: 'response',
      responseType: 'blob',
      params,
      withCredentials: true,
    }).toPromise();

    // noinspection TypeScriptUnresolvedVariable
    const fileUrl = window.URL.createObjectURL(response.body);
    const filename: string = decodeURIComponent(response.headers.get('Content-Disposition')
      .split(';')[1]
      .split('=')[1]
      .replace(/["]/g, ''));

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;
    link.click();

    window.URL.revokeObjectURL(fileUrl);
    return response;
  }
}
