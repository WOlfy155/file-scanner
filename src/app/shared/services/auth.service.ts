import {inject, Injectable} from '@angular/core';
import {Observable, of, tap} from 'rxjs';
import {AuthController} from '../controllers/auth-controller';

export const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';

@Injectable({providedIn: 'root'})
export class AuthService {
  private authController = inject(AuthController);

  register$(login: string, password: string): Observable<string> {
    return this.authController.register(login, password).pipe(tap((token) => this.setToken(token)));
  }

  login$(login: string, password: string): Observable<string> {
    return this.authController.login(login, password).pipe(tap((token) => this.setToken(token)));
  }

  public get authToken$() {
    return of(localStorage.getItem(AUTH_TOKEN_KEY));
  }

  public get authToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }

  private setToken(token: string) {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }
}
