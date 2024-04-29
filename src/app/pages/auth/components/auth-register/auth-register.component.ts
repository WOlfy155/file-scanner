import {Component, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {AuthService} from '../../../../shared/services/auth.service';
import {Router} from '@angular/router';
import {switchMap, take} from 'rxjs';

function confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
  return control.value.password === control.value.confirmPassword ? null : {PasswordNoMatch: true};
};

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  registerFormGroup = new FormGroup({
      login: new FormControl('', {validators: [Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, confirmPasswordValidator]}),
      confirmPassword: new FormControl('', {validators: [Validators.required,confirmPasswordValidator]}),
    },
    {validators: confirmPasswordValidator});

  register() {

    const {login, password, confirmPassword} = this.registerFormGroup.value;

    this.authService.register$(login, password).pipe(
      switchMap(() => this.router.navigate(['/main'])),
      take(1)
    ).subscribe();
  }
}
