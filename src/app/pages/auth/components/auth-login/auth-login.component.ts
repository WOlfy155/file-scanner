import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AUTH_TOKEN_KEY, AuthService} from '../../../../shared/services/auth.service';
import {Router} from '@angular/router';
import {switchMap, take, tap} from 'rxjs';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLoginComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  loginFormGroup = new FormGroup({
    login: new FormControl('', {validators: [Validators.required]}),
    password: new FormControl('', {validators: [Validators.required]}),
  });

  login() {
    const {login, password} = this.loginFormGroup.value;
    this.authService.login$(login, password).pipe(
      switchMap(() => this.router.navigate(['/main'])),
      take(1)
    ).subscribe();
  }
}
