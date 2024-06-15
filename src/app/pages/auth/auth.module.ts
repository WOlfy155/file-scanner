import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthRegisterComponent } from './components/auth-register/auth-register.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    AuthLoginComponent,
    AuthRegisterComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
    ]
})
export class AuthModule { }
