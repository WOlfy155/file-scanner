import {inject, Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthController {
  private http = inject(HttpService);

  login(login: string, password: string): Observable<string> {
    return this.http.post('./login', {login, password});
  }

  register(login: string, password: string): Observable<string> {
    return this.http.post('./register', {login, password});
  }
}
