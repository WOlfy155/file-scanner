import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AUTH_TOKEN_KEY} from '../shared/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req.headers.set('Authorization', localStorage.getItem(AUTH_TOKEN_KEY));
    return next.handle(req);
  }

}
